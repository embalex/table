import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 10px;
  border: 1px solid #D6DADB;
  border-radius: 29px;
  padding-left: 8px;
  align-items: center;
`;

interface IInputText {
  isPlaceholder: boolean;
}

export const InputText = styled.input`
  font-family: Lab Grotesque;
  font-size: 14px;
  width: 252px;
  height: 30px;
  ${(props: IInputText) => props.isPlaceholder ? 'opacity: 0.5;' : ''}
  :focus {
    outline:0;
  }
`;
