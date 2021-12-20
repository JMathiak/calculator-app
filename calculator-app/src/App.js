import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { Component, useState } from "react";

function App() {
  let eqtion = [
    {
      number: "",
    },
    {
      number: "",
    },
    {
      operation: "",
    },
  ];
  //const [input, setInput] = useState(["", ""]);
  const [equation, setEquation] = useState(eqtion[0]);
  //const [operation, setOperation] = useState("");
  const [ind, setInd] = useState(0);
  const add = (val) => {
    eqtion[ind].number = eqtion[ind].number + val;
    setEquation(eqtion);
  };
  const clear = () => {
    eqtion[0].number = "";
    eqtion[1].number = "";
    setEquation(eqtion);
  };

  const setOp = (val) => {
    eqtion[2].operation = val;
    setEquation(eqtion);
    setInd(1);
  };
  return (
    <div>
      <div className="flex-container">
        {equation[0].number} {equation[2].operation} {equation[1].number}
      </div>
      <div className="flex-container">
        <Button value="7" handleClick={add} />
        <Button value="8" handleClick={add} />
        <Button value="9" handleClick={add} />
        <Button value="*" handleClick={setOp} />
      </div>
      <div className="flex-container">
        <Button value="4" handleClick={add} />
        <Button value="5" handleClick={add} />
        <Button value="6" handleClick={add} />
        <Button value="-" handleClick={setOp} />
      </div>
      <div className="flex-container">
        <Button value="1" handleClick={add} />
        <Button value="2" handleClick={add} />
        <Button value="3" handleClick={add} />
        <Button value="+" handleClick={setOp} />
      </div>
      <div className="flex-container">
        <Button value="0" handleClick={add} />
        <Button value="=" handleClick={add} />
        <Button value="/" handleClick={setOp} />
        <Button value="%" handleClick={setOp} />
      </div>
      <div className="flex-container">
        <Button value="Clear" handleClick={clear} />
      </div>
    </div>
  );
}

export default App;
