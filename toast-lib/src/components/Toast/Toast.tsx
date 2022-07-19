import React from 'react';

import { ItoastOptions } from '../../types';
import { ToastEl, ToastIcon, CloseIcon, ToastText } from './styled';

const Toast = ({ type, margin, text }: ItoastOptions) => {
  return (
    <>
      <ToastEl type={type} style={{ margin: margin }}>
        <CloseIcon></CloseIcon>
        <ToastIcon type={type}></ToastIcon>
        <ToastText>{text}</ToastText>
      </ToastEl>
    </>
  );
};

export default Toast;
