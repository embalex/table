import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px 0;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  > * {
    margin-left: 8px;
  }
`;

export const IconDivWrapper = styled.div``;

export const Button = styled.div`
  background: #2B7CEE;
  border-radius: 4px;
  width: 148px;
  height: 40px;
  padding: 0 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const ButtonTextWrapper = styled.span`
  color: #FFFFFF;
  font-family: Lab Grotesque;
  font-size: 13px;
  cursor: default;
`;