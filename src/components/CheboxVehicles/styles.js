import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;
  gap: 16px;

  .error {
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 14px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;

    label {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;
