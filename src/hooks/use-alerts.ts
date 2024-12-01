import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert = withReactContent(Swal);
export function useAlerts(): { toast: (title: string, message: string, type: 'success' | 'error') => void } {
  const toast = (title: string, message: string, type: 'success' | 'error' = 'success') =>
    void Alert.fire({
      title,
      text: message,
      icon: type,
      confirmButtonText: 'OK',
    });

  return { toast };
}
