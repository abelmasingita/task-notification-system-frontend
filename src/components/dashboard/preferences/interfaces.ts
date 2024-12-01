import type { NotificationType } from '@/utils/notificationtype';





export interface Preference {
  id: number;
  user: User;
  notificationType: NotificationType;
  isEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}

export interface UpdatePreference {
  notificationType: NotificationType;
  isEnabled: boolean;
}