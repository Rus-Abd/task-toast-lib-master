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
  background-color: ${(props: toastProps) =>
    toastType[props.type]['background']};
  border-radius: 24px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.16);
  height: 181px;
  position: relative;
  width: 668px;
`;

export const ToastIcon = styled.span`
  background-image: url(${(props: toastProps) => toastType[props.type]['src']});
  height: 64px;
  left: 32px;
  position: absolute;
  top: 59px;
  width: 64px;
`;

export const CloseIcon = styled.button`
  background: none;
  background-image: url(${closeSvg});
  border: none;
  cursor: pointer;
  height: 32px;
  padding: 0;
  position: absolute;
  right: 24px;
  top: 24px;
  width: 32px;
`;

export const ToastText = styled.p`
  color: #ffffff;
  font-family: HelveticaNue;
  font-size: 32px;
  left: 135px;
  line-height: 37px;
  position: absolute;
  top: 73px;
`;
