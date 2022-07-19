import { v4 as uuidv4 } from 'uuid';
import { ItoastOptions } from '../types';

export default class ToastService {
  toasts: ItoastOptions[];
  position: string;
  constructor() {
    this.toasts = [];
    this.position = 'topLeft';
  }

  getAllToasts = () => {
    return this.toasts;
  };

  addToast = (toast: ItoastOptions) => {
    if (this.toasts.length < 3) {
      this.toasts.push({ ...toast, id: uuidv4() });
    } else {
      return;
    }
  };

  removeToast = (toastId: string) => {
    this.toasts = this.toasts.filter((toast) => toast.id !== toastId);
  };

  setPosition = (pos: string) => {
    this.position = pos;
  };
}
