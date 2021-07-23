import { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ClientForm from '../../components/ClientForm';
import PageHeader from '../../components/PageHeader';
import { ClientsContext } from '../../contexts/ClientsContext';
import { Container } from './styles';

function EditClient() {
  const { getClientById } = useContext(ClientsContext);
  const { id } = useParams();
  const history = useHistory();

  const client = getClientById(Number(id));

  useEffect(() => {
    if (!client.length) {
      history.push('/list');
    }
  }, [client, history]);

  return (
    <Container>
      <PageHeader title={client[0]?.nameClientOrFantasy} />
      <ClientForm buttonLabel="Salvar Alterações" data={client[0]} />
    </Container>
  );
}

export default EditClient;
