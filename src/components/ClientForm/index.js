import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { ClientsContext } from '../../contexts/ClientsContext';
import getCep from '../../helpers/getCep';
import getStates from '../../helpers/getStates';
import schemaValidation from '../../helpers/schemaValidation';
import Button from '../Form/Button';
import Input from '../Form/Input';
import Select from '../Form/Select';
import FormGroup from '../FormGroup';
import {
  AddressFormContainer,
  ButtonContainer,
  ContactFormContainer,
  Form,
  SituationClientContainer,
  StoreDataContainer,
} from './styles';

const dateFormat = new Date()
  .toLocaleDateString('pt-Br')
  .split('/')
  .reverse()
  .join('-');

function ClientForm({ buttonLabel, data }) {
  const history = useHistory();
  const { clients, addClients, updateClient } = useContext(ClientsContext);
  const [typeClient, setTypeClient] = useState('');
  const [states, setStates] = useState('');

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    if (data) {
      const arrayProps = Object.entries(data);
      arrayProps.forEach(([key, value]) => {
        if (key !== 'id') {
          if (key === 'typeClient') {
            setTypeClient(value);
          } else if (key !== 'typeClient') {
            setValue(key, value);
          }
        }
      });
    }

    getStates().then(_states => setStates(_states));
  }, [data, setValue]);

  const onSubmit = dados => {
    if (data) {
      const client = {
        id: data.id,
        typeClient,
        ...dados,
      };
      updateClient(client);
    } else {
      addClients({ id: clients.length + 1, typeClient, ...dados });
    }

    history.push('/');
  };

  function handleBlur(event) {
    const type = event.target.value;
    if (!type) {
      setError('typeClient', { message: 'Campo Obrigatório' });
    }

    setTypeClient(type);
  }

  function handleChange(event) {
    const type = event.target.value;

    clearErrors('typeClient');
    setTypeClient(type);
  }

  function handleCep(event) {
    getCep(event).then(response => {
      if (response) {
        clearErrors('cep');
        setValue('publicPace', response.publicPace);
        setValue('city', response.city);
        setValue('state', response.state);
      }
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormGroup label="Tipo de cliente" error={errors?.typeClient?.message}>
        <Select value={typeClient} onChange={handleChange} onBlur={handleBlur}>
          <option value="" disabled>
            Selecione
          </option>
          <option value="Pessoa Física">Pessoa Física</option>
          <option value="Pessoa Jurídica">Pessoa Jurídica</option>
        </Select>
      </FormGroup>

      <SituationClientContainer>
        <p>Situação do cliente? </p>
        <FormGroup error={errors.situationClient?.message}>
          <label>
            <input
              type="radio"
              name="situationClient"
              value="ativo"
              {...register('situationClient')}
            />
            Ativo
          </label>
          <label>
            <input
              type="radio"
              name="situationClient"
              value="inativo"
              {...register('situationClient')}
            />
            Inativo
          </label>
        </FormGroup>
      </SituationClientContainer>

      <ContactFormContainer>
        <FormGroup
          label={typeClient === 'Pessoa Física' ? 'Nome' : 'Nome Fantasia'}
          error={errors?.nameClientOrFantasy?.message}
        >
          <Input type="text" {...register('nameClientOrFantasy')} />
        </FormGroup>

        <FormGroup
          label={typeClient === 'Pessoa Física' ? 'Sobrenome' : 'Razão Social'}
          error={errors?.lastNameOrSocial?.message}
        >
          <Input type="text" {...register('lastNameOrSocial')} />
        </FormGroup>

        <FormGroup
          label={typeClient === 'Pessoa Física' ? 'CPF' : 'CNPJ'}
          error={errors?.cpfOfCnpj?.message}
        >
          <Input type="text" {...register('cpfOfCnpj')} />
        </FormGroup>

        <FormGroup label="Email" error={errors?.email?.message}>
          <Input
            type="email"
            placeholder="email@email.com"
            {...register('email')}
          />
        </FormGroup>

        <FormGroup label="Telefone" error={errors?.phone?.message}>
          <Input type="text" {...register('phone')} />
        </FormGroup>
      </ContactFormContainer>

      <AddressFormContainer>
        <FormGroup label="CEP" error={errors?.cep?.message}>
          <Input
            type="text"
            placeholder="xxxxx-xxx"
            {...register('cep')}
            onBlur={handleCep}
          />
        </FormGroup>
        <FormGroup label="Logradouro" error={errors?.logradouro?.message}>
          <Input
            type="text"
            placeholder="Rua, Avenida, Travessa, etc.."
            {...register('publicPace')}
          />
        </FormGroup>
        <FormGroup label="Número" error={errors?.storeNumber?.message}>
          <Input type="text" {...register('storeNumber')} />
        </FormGroup>
        <FormGroup label="Cidade" error={errors?.city?.message}>
          <Input type="text" {...register('city')} />
        </FormGroup>
        <FormGroup label="Estado" error={errors?.state?.message}>
          <Select defaultValue="" {...register('state')}>
            <option value="" disabled>
              Selecione
            </option>
            {states &&
              states.map(state => (
                <option key={state.id} value={state.sigla}>
                  {state.nome}
                </option>
              ))}
          </Select>
        </FormGroup>
      </AddressFormContainer>

      <StoreDataContainer>
        <FormGroup
          label="Abertura da loja"
          error={errors?.storeOpeningHours?.message}
        >
          <Input type="time" {...register('storeOpeningHours')} />
        </FormGroup>
        <FormGroup
          label="Dia do Atendimento"
          error={errors?.dayService?.message}
        >
          <Input type="date" min={dateFormat} {...register('dayService')} />
        </FormGroup>
      </StoreDataContainer>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ClientForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Object),
};

ClientForm.defaultProps = {
  data: null,
};

export default ClientForm;
