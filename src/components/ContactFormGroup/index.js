import PropTypes from 'prop-types';
import React from 'react';

import Input from '../Form/Input';
import FormGroup from '../FormGroup';

export default function ContactFormGroup({ typeClient }) {
  return (
    <>
      <FormGroup
        label={typeClient === 'Pessoa Física' ? 'Nome' : 'Nome Fantasia'}
      >
        <Input type="text" />
      </FormGroup>

      <FormGroup
        label={typeClient === 'Pessoa Física' ? 'Sobrenome' : 'Razão Social'}
      >
        <Input type="text" />
      </FormGroup>

      <FormGroup label={typeClient === 'Pessoa Física' ? 'CPF' : 'CNPJ'}>
        <Input type="text" />
      </FormGroup>

      <FormGroup label="Email">
        <Input type="email" placeholder="email@email.com" />
      </FormGroup>

      <FormGroup label="Telefone">
        <Input type="text" />
      </FormGroup>
    </>
  );
}

ContactFormGroup.propTypes = {
  typeClient: PropTypes.string.isRequired,
};
