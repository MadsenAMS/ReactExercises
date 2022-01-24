import { useState } from "react";
import Button from "../Button";

const Card = () => {
  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter(counter + 1);
  }

  function Decrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <div className="card">
        <div className="card-header">Card</div>
        <div className="card-body">
          <h5 className="card-title">Utilizando Card do Bootstrap com React</h5>
          <p className="card-text">{counter}</p>
          <Button onClick={Increment}>{"increment"}</Button>
          <Button onClick={Decrement}>{"decrement"}</Button>
        </div>
      </div>
    </>
  );
};

export default Card;
