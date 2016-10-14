import * as React from 'react';
import './ExampleComponent.scss';

interface IExampleComponentProps {
  compiler: string;
  framework: string;
}

interface IExampleComponentState {
  // No state
}

class ExampleComponent extends React.Component<IExampleComponentProps, IExampleComponentState> {
  public render() {
    return (
      <h1 className='heading'>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    );
  }
}

export default ExampleComponent;
