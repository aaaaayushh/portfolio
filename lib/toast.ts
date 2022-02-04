import { toast } from 'react-toastify';

export const showErrorToast = (msg:string) => {
  toast.error(msg, {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar:true,
    containerId:'mainSection'
  });
};
export const showSuccessToast = (msg:string) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const showWarningToast = (msg:string) => {
  toast.warning(msg, {
    position: toast.POSITION.TOP_CENTER,
  });
};

