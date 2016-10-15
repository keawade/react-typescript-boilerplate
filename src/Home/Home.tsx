import * as React from 'react';
import './Home.scss';

interface IHomeProps {
  // No props
}

interface IHomeState {
  // No state
}

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
  }

  public render() {
    return (
      <div className='home'>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
