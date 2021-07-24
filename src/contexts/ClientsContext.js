import PropTypes from 'prop-types';
import React, { useState, createContext } from 'react';

import formatDate from '../helpers/formatDate';
import CLIENTS_MOCK from '../mocks/clients.json';

export const ClientsContext = createContext();

function ClientsProvider({ children }) {
  const [clients, setClients] = useState(CLIENTS_MOCK);
  function addClients(client) {
    const clientFormat = Object.defineProperty(client, 'dayService', {
      value: formatDate(client.dayService),
      writable: true,
    });
    setClients(prevState => [...prevState, clientFormat]);
  }

  function getClientById(id) {
    const filtered = clients.filter(client => client.id === id);

    return filtered;
  }

  function removeClient(id) {
    setClients(prevState => prevState.filter(client => client.id !== id));
  }

  function updateClient(_client) {
    setClients(
      clients.map(client => (client.id === _client.id ? _client : client)),
    );
  }

  return (
    <ClientsContext.Provider
      value={{ clients, addClients, getClientById, updateClient, removeClient }}
    >
      {children}
    </ClientsContext.Provider>
  );
}

ClientsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientsProvider;
