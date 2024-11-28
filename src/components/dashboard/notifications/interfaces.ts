export interface Notification {
  id: number;
  user: {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
  };
  message: string;
  read: boolean;
  createdAt: Date;
}
