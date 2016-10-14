import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ExampleComponent from './components/ExampleComponent';

ReactDOM.render(
  <ExampleComponent compiler='TypeScript' framework='React' />,
  document.getElementById('root')
);
