import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import MyTable from '../../components/MyTable';
import { Container } from './styles';

function ListClients() {
  return (
    <Container>
      <header>
        <Link to="/">
          <img src={arrow} alt="Voltar" />
          <span>Voltar</span>
        </Link>
      </header>
      <MyTable />
    </Container>
  );
}

export default ListClients;
