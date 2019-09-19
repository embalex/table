import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-left: 12px;
  }
`;

export const Text = styled.span`
  font-family: Lab Grotesque;
  font-size: 14px;
  opacity: 0.5;
`;
