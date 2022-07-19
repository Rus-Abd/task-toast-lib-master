import { forwardRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const ToastContainer = forwardRef((props, ref) => {
  const [portal, setPortal] = useState(document.body);

  return ReactDOM.createPortal(<ErrorBoundary></ErrorBoundary>, portal);
});

export default ToastContainer;

ToastContainer.displayName = `ToastContainer`;
