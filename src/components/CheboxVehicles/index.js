/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

import { Container } from './styles';

function CheboxVehicles({ values, setValues, error, clearError }) {
  function handleChange({ target }) {
    clearError('vehicles');
    if (target.checked) {
      setValues(prevState => [...prevState, target.value]);
    } else {
      setValues(prevState =>
        prevState.filter(vehicle => vehicle !== target.value),
      );
    }
  }

  function handleChecked(vehicle) {
    return values.includes(vehicle);
  }
  return (
    <Container>
      <div>
        <p>Veículos utilizados?</p>
        <label>
          <input
            type="checkbox"
            value="Moto"
            checked={handleChecked('Moto')}
            onChange={handleChange}
          />
          Moto
        </label>
        <label>
          <input
            type="checkbox"
            value="Carro"
            checked={handleChecked('Carro')}
            onChange={handleChange}
          />
          Carro
        </label>
        <label>
          <input
            type="checkbox"
            value="Caminhão"
            checked={handleChecked('Caminhão')}
            onChange={handleChange}
          />
          Caminhão
        </label>
      </div>
      {error && <p className="error">{error}</p>}
    </Container>
  );
}

CheboxVehicles.propTypes = {
  values: PropTypes.instanceOf(Array).isRequired,
  setValues: PropTypes.func.isRequired,
  error: PropTypes.string,
  clearError: PropTypes.func.isRequired,
};

CheboxVehicles.defaultProps = {
  error: null,
};

export default CheboxVehicles;
