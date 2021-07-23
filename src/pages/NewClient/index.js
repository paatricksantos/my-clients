import ClientForm from '../../components/ClientForm';
import PageHeader from '../../components/PageHeader';
import { Container } from './styles';

function NewClient() {
  return (
    <Container>
      <PageHeader title="Novo Contato" />

      <ClientForm buttonLabel="Cadastrar" />
    </Container>
  );
}

export default NewClient;
