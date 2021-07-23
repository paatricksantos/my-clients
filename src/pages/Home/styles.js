import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;

  margin: 0 auto 18px auto;

  padding: 0 8px;
  p {
    font-size: 18px;
    display: flex;
    gap: 8px;

    button {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 16px;
      border: 0;
      color: ${({ theme }) => theme.colors.danger.main};
      background: none;
    }
  }

  div {
    margin-top: 18px;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  a {
    text-decoration: none;

    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    padding: 8px 16px;

    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;
