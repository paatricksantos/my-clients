import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 48px;
  margin-bottom: 48px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.5rem;

  h1 {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  em {
    color: ${({ theme }) => theme.colors.gray[900]};
    text-decoration: underline;
  }
`;
