// Source: https://www.youtube.com/watch?v=HKHVWBCp9v0&list=PLNkWIWHIRwMFQBDhZ6HfwO9NL09X3N3Gq&index=6

import React, { Component } from 'react';

type CounterState = {
  count: number,
};

type CounterProps = {
  readonly title?: string,
};

// React.SyntheticEvent - обгортка React над стандартними івентами для досягнення кроссбраузерності
// Відповідно там же містяться конкретні типи, наприклад: React.MouseEvent, React.FocusEvent, ...
let eventVar: React.SyntheticEvent;

class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => { // Типізували тип події React.MouseEvent а також сам елемент - HTMLButtonElement
    console.log(`${e.clientX}, ${e.clientY}`);
    this.setState(({ count }) => ({
      count: ++count,
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
        <a href="#" onClick={this.handleClick}>+1</a>
      </div>
    )
  }
};

const App = () => <Counter title="Counter: "/>

export default App;
