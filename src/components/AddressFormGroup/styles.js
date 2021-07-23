import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 8px;

  div:first-child {
    grid-column: 1 / 4;
  }

  div:nth-child(even) {
    grid-column: 1/ 3;
  }
`;
