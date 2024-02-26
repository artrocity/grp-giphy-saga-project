import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SearchView from '../SearchView/SearchView';
import FavoritesView from '../FavoritesView/FavoritesView';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchView />
          </Route>

          <Route path="/favorites" exact>
            <FavoritesView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
