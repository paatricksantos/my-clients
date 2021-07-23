import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import Header from './components/Header';
import AuthProvider from './contexts/AuthContext';
import ClientsProvider from './contexts/ClientsContext';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <AuthProvider>
          <ClientsProvider>
            <Routes />
          </ClientsProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
