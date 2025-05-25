import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from "jwt-decode";
import { routeurl } from '@/app/configs/routeapi';

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) prom.reject(error);
        else prom.resolve(token);
    });
    failedQueue = [];
};

export function setupAxiosInterceptors() {
    axios.defaults.baseURL = routeurl;

    axios.interceptors.request.use(
        async config => {
            const token = await AsyncStorage.getItem('@userToken');
            if (token) {
                const { exp } = jwtDecode<{ exp: number }>(token);
                const isExpired = Date.now() / 1000 >= exp;

                if (isExpired && !isRefreshing) {
                    isRefreshing = true;
                    try {
                        const stored = await AsyncStorage.getItem('@refreshToken');
                        const { data } = await axios.post(
                            '/auth/refresh-token',
                            { refreshToken: stored }
                        );
                        const newToken = data.tokenResponse.token;
                        const newRefresh = data.tokenResponse.refreshToken;

                        await AsyncStorage.multiSet([
                            ['@userToken', newToken],
                            ['@refreshToken', newRefresh],
                        ]);
                        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                        processQueue(null, newToken);
                    } catch (err) {
                        processQueue(err, null);
                        throw err;
                    } finally {
                        isRefreshing = false;
                    }
                }

                if (isRefreshing) {
                    return new Promise((resolve, reject) => {
                        failedQueue.push({ resolve, reject });
                    }).then(tok => {
                        config.headers!['Authorization'] = `Bearer ${tok}`;
                        return config;
                    });
                }

                config.headers!['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        error => Promise.reject(error)
    );

    axios.interceptors.response.use(
        res => res,
        err => {
            if (err.response?.status === 401) {
            }
            return Promise.reject(err);
        }
    );
}