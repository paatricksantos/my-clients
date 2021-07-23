import styled from 'styled-components';

export const Form = styled.form``;

export const SituationClientContainer = styled.div`
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

export const ContactFormContainer = styled.div``;

export const AddressFormContainer = styled.div`
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

export const StoreDataContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 8px;

  div {
    margin: 0 !important;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;
