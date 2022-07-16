import { v4 as uuidv4 } from 'uuid';
import { ItoastOptions } from '../types';

export default class ToastService {
  constructor() {
    this.toasts = [];
  }

  getAllToasts = () => {
    return this.toasts;
  };

  addToast = (toast) => {
    if (this.toasts.length < 3) {
      this.toasts.push(toast);
    } else {
      return;
    }
  };

  removeToast = (toastId: string) => {
    this.toasts = this.toasts.filter((toast) => toast.id !== toastId);
  };

  generateToast = (toastOptions: ItoastOptions) => {
    return {
      id: uuidv4(),
      ...toastOptions,
    };
  };
}
