import { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Prasana",
    };
  }

  clickMe = () => {
    this.setState({ name: "Shyam" });
  };

  increase = () => {
    this.setState((prevState) => ({
      counter: prevState + 1,
    }));
  };

  decrease = () => {
    this.setState((prevState) => ({
      counter: prevState - 1,
    }));
  };

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <h1>Hello {name}</h1>
        <button onClick={this.clickMe}></button>
        <h2>Counter</h2>
        <button onCllick={this.decrease}>-</button>
        <button onCllick={this.increase}>+</button>
      </div>
    );
  }
}

export default CounterClass;
