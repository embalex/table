import * as React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 193px;
  height: 32px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #E1E5E6;
  border-radius: 21px;
  align-items: center;
`;

interface IText {
  onSlider?: boolean;
}

export const Text = styled(
  ({ onSlider, children, ...rest}) => <span {...rest}>{children}</span>)`
  font-family: Lab Grotesque;
  font-size: 14px;
  cursor: default;
  ${(props: IText) => props.onSlider ? '' : 'opacity: 0.5;'}
`;

interface IPosition {
  position: 'LEFT' | 'RIGHT';
}

export const Slider = styled(
  ({ position, children, ...rest }) => <div {...rest}>{children}</div>)`
  position: absolute;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(55, 88, 123, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 103px;
  height: 32px;
  left: 0;
  transition: transform 0.2s;
  transform: translateX(${(props: IPosition) => props.position === 'LEFT' ? '0' : 'calc(193px - 103px)'});
`;
