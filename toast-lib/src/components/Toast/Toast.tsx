import React from 'react';

import './toast.css';

interface Iprops {
  type: 'info' | 'warning' | 'error' | 'success';
  text?: string;
  duration?: number;
  margin?: string;
}

const Toast = ({ type, margin, text }: Iprops) => {
  return (
    <div className={`toast type--${type}`} style={{ margin: margin }}>
      <button className="close-icon"></button>
      <span className={`${type}-icon icon`}></span>
      <p>{text}</p>
    </div>
  );
};

export default Toast;
