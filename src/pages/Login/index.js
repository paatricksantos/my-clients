import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import FormGroup from '../../components/FormGroup';
import { AuthContext } from '../../contexts/AuthContext';
import { ButtonContainer, Form } from './styles';

const schema = yup.object().shape({
  email: yup.string().required('Campo Obrigatório'),
  password: yup.string().required('Campo Obrigatório'),
});

function Login() {
  const { user, signIn } = useContext(AuthContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    signIn(data);
    if (signIn(data)) {
      history.push('/');
      return;
    }
    reset();
    setError('dados', { type: 'manual', message: 'Dados incorretos' });
  }

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      {errors?.dados && <p>** {errors?.dados?.message}</p>}
      <FormGroup label="Email" error={errors?.email?.message}>
        <Input type="email" {...register('email')} />
      </FormGroup>
      <FormGroup label="Senha" error={errors?.password?.message}>
        <Input type="password" {...register('password')} />
      </FormGroup>
      <ButtonContainer>
        <Button type="submit">Entrar</Button>
      </ButtonContainer>
    </Form>
  );
}

export default Login;
