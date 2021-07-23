import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import { Container } from './styles';

function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Voltar" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
      <em>* Todos os campos são obrigatórios</em>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string,
};

PageHeader.defaultProps = {
  title: null,
};

export default PageHeader;
