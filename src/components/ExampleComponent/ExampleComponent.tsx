import * as React from 'react';
import './ExampleComponent.scss';

interface IExampleComponentProps {
  compiler: string;
  framework: string;
}

interface IExampleComponentState {
  counter: number;
}

class ExampleComponent extends React.Component<IExampleComponentProps, IExampleComponentState> {
  constructor(props: IExampleComponentProps) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  public render() {
    return (
      <div>
        <h1 className='heading'>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <button onClick={this.handleClick}>Click me!</button>
        <div>Count: {this.state.counter}</div>
      </div>
    );
  }

  private handleClick = (event: any): void => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default ExampleComponent;
