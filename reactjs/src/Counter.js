import { useState } from "react";
import "./App.css";

const names = ["Prasanna", "Arjun", "Ram", "Hari", "Shyam"];

function Counter() {
  const [name, setName] = useState("Prasanna");

  const [counter, setCounter] = useState(0);

  function clickMe() {
    setName("Shyam");
  }

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <button onClick={clickMe}>Click me</button>

      <h2>{counter}</h2>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>

      {names.map((el) => {
        return <p>{el}</p>;
      })}
    </div>
  );
}

export default Counter;
