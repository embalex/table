import styled from 'styled-components';

export const Deselected = styled.div`
  font-size: 14px;
  padding: 4px 0 4px 12px;
  color: rgba(0, 0, 0, 0.5);
  cursor: default;
  :hover {
    color: #000000;
  }
`;

export const Selected = styled(Deselected)`
  padding-left: 11px;
  border-left: 1px solid #000000;
  color: #000000;
`;