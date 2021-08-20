// Source: https://www.youtube.com/watch?v=wIheTSFF7Ew&list=PLNkWIWHIRwMFQBDhZ6HfwO9NL09X3N3Gq&index=5

import React, { Component } from 'react';

/*
class Counter extends Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: ++count,
    }))
  }

  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
};
*/


// Синтаксис типизации классового компонента
// якщо пропертив досить багато - краще створити окремі типи:
type CounterState = {
  count: number,
};

type CounterProps = {
  readonly title?: string, // флаг readonly - забороняє змінювати стейт напряму
};

const styles: React.CSSProperties = { border: '1px solid #f00', backgroundColor: '#0f0' } // спец тип для стилів

class Counter extends Component<CounterProps, CounterState> { // Через дженерик задаем 2 параметра: первый - типизация Props, второй - типизация State
  constructor(props: CounterProps) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  static defaultProps: CounterProps = {
    title: "Default counter: ",
  };

  static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    return true ? { count: 2 } : null;
  }

  componentDidMount(): void {

  }

  shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
    return true;
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: ++count,
    }))
  }

  render() {
    //this.props.title = '';   // - видасть помилку бо ця пропертя readonly
    return (
      <div>
        <h1 style={styles}>{this.props.title}{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
};

const App = () => <Counter title="Counter: "/>

export default App;
