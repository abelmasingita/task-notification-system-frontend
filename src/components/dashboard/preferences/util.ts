'use client';

import { useEffect, useState } from 'react';
import { getUserId } from '@/utils/auth';

import { useAlerts } from '@/hooks/use-alerts';

import axiosInstance from '../../../helper/axios-interceptor';
import type { Preference, UpdatePreference } from './interfaces';

const usePreference = () => {
  const [items, setItems] = useState<Preference[]>([]);
  const [item, setItem] = useState<Preference>();
  const [loading, setLoading] = useState(false);
  const userId = getUserId();
  const { toast: alert } = useAlerts();

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get<Preference[]>(`/api/preferences/user/${userId}`);
      setItems(response?.data);
    } catch (error) {
      console.error('Error fetching messages', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchById = async (id: string) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get<Preference>(`/api/preferences/${id}`);
      setItem(response?.data);
    } catch (error) {
      console.error('Error fetching messages', error);
    } finally {
      setLoading(false);
    }
  };

  const update = async (data: UpdatePreference) => {
    setLoading(true);
    try {
      const response = await axiosInstance.put<Preference>(`/api/preferences/${userId}`, {
        notificationType: data.notificationType,
        isEnabled: data.isEnabled,
      });
      setItem(response?.data);
      alert('Success', 'Preference Updated', 'success');
    } catch (error) {
      console.error('Error when updating', error);
      alert('Error', 'Error when updating', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetch();
  }, []);
  return {
    items,
    item,
    fetchById,
    loading,
    update,
  };
};

export { usePreference };