import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  :nth-child(n) {
    padding-right: 12px;
  }
`;

export const Text = styled.span`
  font-family: Lab Grotesque;
  font-size: 14px;
  opacity: 0.5;
`;