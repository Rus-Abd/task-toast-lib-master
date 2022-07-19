import styled from 'styled-components';

import closeSvg from '../../assets/icons/close.svg';
import warningSvg from '../../assets/icons/warning.svg';
import infoSvg from '../../assets/icons/information.svg';
import errorSvg from '../../assets/icons/error.svg';
import successSvg from '../../assets/icons/success.svg';

const toastType = {
  warning: {
    background: '#f4e048',
    src: warningSvg,
  },
  error: {
    background: '#e25837',
    src: errorSvg,
  },
  info: {
    background: '#9a40d3',
    src: infoSvg,
  },
  success: {
    background: '#37e29a',
    src: successSvg,
  },
};

type toastProps = {
  type: 'info' | 'error' | 'success' | 'warning';
};

export const ToastEl = styled.div`
  width: 668px;
  height: 181px;
  border-radius: 24px;
  position: relative;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.16);
  background-color: ${(props: toastProps) =>
    toastType[props.type]['background']};
`;

export const ToastIcon = styled.span`
  position: absolute;
  width: 64px;
  height: 64px;
  top: 59px;
  left: 32px;
  background-image: url(${(props: toastProps) => toastType[props.type]['src']});
`;

export const CloseIcon = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  background: none;
  background-image: url(${closeSvg});
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const ToastText = styled.p`
  font-family: HelveticaNue;
  position: absolute;
  top: 73px;
  left: 135px;
  font-size: 32px;
  line-height: 37px;
  color: #ffffff;
`;
