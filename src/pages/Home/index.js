import { useContext } from 'react';
import { Link } from 'react-router-dom';

import exit from '../../assets/images/icons/exit.svg';
import { AuthContext } from '../../contexts/AuthContext';
import { Container } from './styles';

function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Container>
      <p>
        Bem vindo,
        <strong>{user?.name}</strong>
        <button type="button" onClick={logout}>
          <img src={exit} alt="Sair" /> Sair
        </button>
      </p>
      <small>O que deseja fazer? </small>
      <div>
        <Link to="/list">Ver Lista de Clientes</Link>
        <Link to="/new">Adicionar novos clientes</Link>
      </div>
    </Container>
  );
}

export default Home;
