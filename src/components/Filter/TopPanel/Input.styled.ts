import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  :nth-child(n) {
    padding-right: 10px;
  }
  border: 1px solid #D6DADB;
  border-radius: 29px;
  padding-left: 8px;
  align-items: center;
`;

export const InputText = styled.input`
  font-family: Lab Grotesque;
  font-size: 14px;
  width: 252px;
  height: 32px;
  opacity: 0.5;
`;
