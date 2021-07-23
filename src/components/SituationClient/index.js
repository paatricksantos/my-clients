import FormGroup from '../FormGroup';
import { Container } from './styles';

function SituationClient() {
  return (
    <Container>
      <p>Situação do cliente? </p>
      <FormGroup>
        <label>
          <input type="radio" name="situationClient" />
          Ativo
        </label>
        <label>
          <input type="radio" name="situationClient" />
          Inativo
        </label>
      </FormGroup>
    </Container>
  );
}

export default SituationClient;
