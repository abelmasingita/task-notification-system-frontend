import { useState } from 'react';
import axiosInstance from '@/helper/axios-interceptor';
import { getUserId } from '@/utils/auth';

import { AuthKeys } from '@/lib/auth/custom/client';

interface AuthResponse {
  accessToken: string;
  userId: string;
}

export interface LoggedInUser {
  id: number;
  username: string;
  email: string;
}

const useAuthenticate = () => {
  const [token, setToken] = useState<AuthResponse | null>(null);
  const [user, setUser] = useState<LoggedInUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const userId = getUserId();

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post<AuthResponse>('/api/auth/login', {
        username: email,
        password,
      });
      if (response.data) {
        setToken({
          accessToken: response.data.accessToken,
          userId: response.data.userId,
        });
      }
    } catch (err) {
      console.error('Error on login', err);
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/api/auth/logout');
      if (response?.status === 200) {
        localStorage.removeItem(AuthKeys.TOKEN_KEY);
        localStorage.removeItem(AuthKeys.USER_ID);
      }
    } catch (err) {
      console.error('Error on login', err);
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get<LoggedInUser>(`/api/users/${userId}`);
      if (response.data) {
        setUser(response?.data);
      }
    } catch (err) {
      console.error('Error on login', err);
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return {
    token,
    login,
    loading,
    error,
    getUser,
    user,
    logOut,
  };
};

export { useAuthenticate };
