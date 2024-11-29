import type { NotificationType } from '@/utils/notificationtype';

export interface Notification {
  id: number;
  message: string;
  notificationType: NotificationType;
  createdAt: string;
}
