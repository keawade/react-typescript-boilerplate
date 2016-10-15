import * as React from 'react';
import './App.scss';

interface IAppProps {
  // No props
}

interface IAppState {
  // No state
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
  }

  public render() {
    return (
      <div className='wrapper'>
        {this.props.children}
      </div>
    );
  }
}

export default App;
