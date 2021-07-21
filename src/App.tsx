import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { Login } from './pages';

const App = () => (
  <Router>
    <GlobalStyles />
    <Switch>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
);

export default App;
