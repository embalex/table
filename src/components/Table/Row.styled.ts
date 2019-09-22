import styled from 'styled-components';

import { objectToCss } from '../../utils';

export const Wrapper = styled.div`
  margin-bottom: 12px;
  position: relative;
  padding-left: 32px;
  padding-right: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 1px 4px rgba(54, 65, 76, 0.15);
  border-radius: 4px;
  background: #FFFFFF;
  height: 132px;
  justify-content: space-between;
  :hover {
    box-shadow: 0px 6px 12px rgba(54, 65, 76, 0.15);
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  > div:last-child {
    margin-left: 40px;
  }
`;

interface IReviewStatus {
  meta?: object;
}

export const ReviewStatus = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  font-family: Lab Grotesque;
  font-size: 11px;
  text-align: center;
  width: 64px;
  padding: 0 4px;
  ${(props: IReviewStatus) => props.meta ? objectToCss(props.meta) : ''}
`;
