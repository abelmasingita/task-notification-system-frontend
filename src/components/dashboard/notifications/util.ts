'use client';

import { useEffect, useState } from 'react';
import { getUserId } from '@/utils/auth';

import axiosInstance from '../../../helper/axios-interceptor';
import type { Notification } from './interfaces';

const useNotificationList = () => {
  const [items, setItems] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);
  const userId = getUserId();

  useEffect(() => {
    void fetch();
  }, []);

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get<Notification[]>(`/api/notifications/${userId}`);
      setItems(response?.data);
    } catch (error) {
      console.error('Error fetching messages', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    items,
    loading,
    setItems,
  };
};

export { useNotificationList };