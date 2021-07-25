import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { Login, Search, Results } from './pages';
import { ProtectedPage } from './components';

const App = () => (
  <Router>
    <GlobalStyles />
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/search">
        <ProtectedPage>
          <Search />
        </ProtectedPage>
      </Route>
      <Route path="/results">
        <ProtectedPage>
          <Results />
        </ProtectedPage>
      </Route>
    </Switch>
  </Router>
);

export default App;
