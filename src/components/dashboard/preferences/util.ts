'use client';

import { useEffect, useState } from 'react';

import axiosInstance from '../../../helper/axios-interceptor';
import type { Preference } from './interfaces';

const usePreferenceList = () => {
  const [items, setItems] = useState<Preference[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get<Preference[]>(`/api/preferences/2`);
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

export { usePreferenceList };
