import styled from 'styled-components';

import { objectToCss } from '../../utils';

export const Wrapper = styled.div`
  width: 290px;
  height: 100%;
  padding-top: 13px;
`;

export const Header = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Lab Grotesque;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const InfoLabel = styled.div`
  padding-right: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

interface IInfoValue {
  meta?: object;
}

export const InfoValue = styled.div`
  padding-left: 10px;
  color: #000000;
  ${(props: IInfoValue) => props.meta ? objectToCss(props.meta) : ''}

`;

export const InfoSeparator = styled.div`
  border-bottom: 1px solid #BDC0C1;
  display: flex;
  flex-grow: 1;
`;
