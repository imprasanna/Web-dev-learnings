import React, { useEffect, useState } from "react";
// import Header from "./components/Header";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Ram");
  useEffect(() => {
    if (counter > 0) {
      setName("Shyam");
    }
    // ComponentWillMount()
    console.log("Rendered!");
  }, [counter]); //(dependencies array)
  return (
    <div>
      <h1>Counter value: {counter}</h1>
      <p>{name}</p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increase
      </button>
    </div>
  );
};

export default App;
