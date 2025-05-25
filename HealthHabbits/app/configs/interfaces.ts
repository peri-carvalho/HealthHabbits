export  interface CategoryHome {
    id: number;
    name: string;
}

export interface ActivitesHome {
    id: number,
    type: string,
    name: string
    objectives: string
}

export interface SignUpForm {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}