import styled from 'styled-components';

import { IThemeWithProps } from '../../theme/types';

export const Wrapper = styled.div`
  background: #F4F5F6;
  padding-left: 24px;
  height: ${({ theme }: IThemeWithProps) => theme.header.height};
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  color: rgba(63, 68, 72, 0.6);
  padding-left: 9px;
  font-size: 32px;
`;
