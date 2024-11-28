export interface Preference {
  id: number;
  user: {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
  };
  notification_type: string;
  enabled: boolean;
}
