import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 500px;

  margin: 0 auto 18px auto;

  padding: 0 8px;
  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.danger.main};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;
