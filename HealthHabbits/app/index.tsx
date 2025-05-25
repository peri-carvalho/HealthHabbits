import React, { useEffect } from 'react';
import AppScreens from './navigation';
import { setupAxiosInterceptors } from '@/app/configs/auth';

export default function App() {
  useEffect(() => {
    setupAxiosInterceptors();
  }, []);

  return (
      <AppScreens />
  );
}