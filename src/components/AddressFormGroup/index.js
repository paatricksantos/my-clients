import React from 'react';

import Input from '../Form/Input';
import Select from '../Form/Select';
import FormGroup from '../FormGroup';
import { Container } from './styles';

function AddressFormGroup() {
  return (
    <Container>
      <FormGroup label="CEP">
        <Input type="text" placeholder="xxxxx-xxx" />
      </FormGroup>
      <FormGroup label="Logradouro">
        <Input type="text" placeholder="Rua, Avenida, Travessa, etc.." />
      </FormGroup>
      <FormGroup label="Número">
        <Input type="text" />
      </FormGroup>
      <FormGroup label="Cidade">
        <Input type="text" />
      </FormGroup>
      <FormGroup label="Cidade">
        <Select>
          <option value="">Estado</option>
        </Select>
      </FormGroup>
    </Container>
  );
}

export default AddressFormGroup;
