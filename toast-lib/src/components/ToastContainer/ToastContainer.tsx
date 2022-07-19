import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Container } from './styled';
import { ItoastOptions, Tposition } from '../../types';
import ReactDOM from 'react-dom';
import Toast from '../Toast/Toast';

const ToastContainer = ({
  position,
  toasts,
}: {
  position: Tposition;
  toasts: ItoastOptions[];
}) => {
  return ReactDOM.createPortal(
    <ErrorBoundary>
      <Container position={position}>
        {toasts.map(({ id, type, text, margin }) => (
          <Toast key={id} id={id} type={type} text={text} margin={margin} />
        ))}
      </Container>
    </ErrorBoundary>,
    document.body
  );
};

export default ToastContainer;

ToastContainer.displayName = `ToastContainer`;
