import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;

  margin: 0 auto 18px auto;

  padding: 0 8px;

  header {
    margin-bottom: 8px;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
    }
    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

  .actions {
    display: flex;

    a {
    }

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
      padding-bottom: 8px;
    }
  }
`;
