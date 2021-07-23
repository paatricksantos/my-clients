import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  label {
    display: block;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]};

    input,
    select {
      margin-top: 8px;
    }
  }

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
    margin-top: 8px;
    display: block;
  }
`;
