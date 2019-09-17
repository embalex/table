import styled from 'styled-components';

import { IThemeWithProps } from '../theme/types';

export const AppWrapper = styled.div`
  height: 100vh;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - ${({ theme }: IThemeWithProps) => theme.header.height});
  padding-top: 24px;
`;

export const LeftPanelWrapper = styled.div`
  flex: 0 0 ${({ theme }: IThemeWithProps) => theme.leftPanel.width};
  padding: 0 40px 0 80px;
  box-sizing: border-box;
`;

export const TableWrapper = styled.div`
  width: 100%;
`;