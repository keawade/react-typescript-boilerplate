import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import './normalize.css';

import App from './App';

import Home from './Home';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);
