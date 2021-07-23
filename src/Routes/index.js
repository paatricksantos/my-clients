import { Route, Switch } from 'react-router-dom';

import EditClient from '../pages/EditClient';
import Home from '../pages/Home';
import ListClients from '../pages/ListClients';
import Login from '../pages/Login';
import NewClient from '../pages/NewClient';
import { ProtectedRoute } from './ProtectedRoute';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/" exact component={Home} />
      <ProtectedRoute path="/new" component={NewClient} />
      <ProtectedRoute path="/list" component={ListClients} />
      <ProtectedRoute path="/edit/:id" component={EditClient} />
    </Switch>
  );
}

export default Routes;
