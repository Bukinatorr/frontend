import router from 'next/router';
import { toast } from 'react-toastify';

interface alertMessageProps {
  type: string;
  message: string;
  path?: string | null;
}

export const alertMessage = ({ type, message, path }: alertMessageProps) => {
  toast.configure({
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  switch (type) {
    case 'success':
      toast.success(message, {
        hideProgressBar: true,
        draggable: true,
      });
      break;

    case 'error':
      toast.error(message, {
        hideProgressBar: true,
        draggable: true,
      });
      break;

    case 'info':
      toast.info(message, {
        hideProgressBar: true,
        draggable: true,
      });
      break;

    case 'warn':
      toast.warn(message, {
        hideProgressBar: true,
        draggable: true,
      });
      break;

    default:
      toast(message, {
        hideProgressBar: true,
        draggable: true,
      });
      break;
  }

  setTimeout(() => {
    if (path) router.replace(path);
  }, 2000);
};
