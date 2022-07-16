import React from 'react';
import { ItoastOptions } from '../../types';

import './toast.css';

const Toast = ({ type, margin, text }: ItoastOptions) => {
  return (
    <div className={`toast type--${type}`} style={{ margin: margin }}>
      <button className="close-icon"></button>
      <span className={`${type}-icon icon`}></span>
      <p>{text}</p>
    </div>
  );
};

export default Toast;
