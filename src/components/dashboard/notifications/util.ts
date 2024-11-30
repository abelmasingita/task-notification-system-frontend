'use client';

import { useEffect, useState } from 'react';



import useWebSocket from '@/hooks/use-webscoket';



import axiosInstance from '../../../helper/axios-interceptor';
import type { Notification } from './interfaces';

const useNotificationList = () => {
  const [items, setItems] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(false);

  const { notifications, connected } = useWebSocket('ws://localhost:8080/ws', '2');

  useEffect(() => {
    if (connected && notifications.length > 0) {
      //latest notifications to the top of the list, maintaining most recent order
      setItems((prevItems) => {
        return [...notifications, ...prevItems];
      });
    }
  }, [connected, notifications]);

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get<Notification[]>(`/api/notifications/2`);
      setItems(response?.data);
    } catch (error) {
      console.error('Error fetching messages', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    void fetch();
  }, []);
  return {
    items,
    loading,
  };
};

export { useNotificationList };