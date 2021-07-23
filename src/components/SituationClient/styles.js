import styled from 'styled-components';

export const Container = styled.div`
  margin: 16px 0;
  display: flex;
  gap: 16px;

  div {
    margin: 0 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  label {
    margin: 0px 16px 0px 0px;
    display: flex;
    align-items: center;
    gap: 4px;

    input {
      margin: 0 !important;
    }
  }

  small {
    margin: 0;
  }
`;
