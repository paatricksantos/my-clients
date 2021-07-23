import PropTypes from 'prop-types';

import { Container } from './styles';

function FormGroup({ children, label, error }) {
  return (
    <Container>
      <label>
        {label}
        {children}
      </label>
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  label: null,
  error: null,
};

export default FormGroup;
