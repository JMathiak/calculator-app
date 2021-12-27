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
  ];
  const [input, setInput] = useState("");
  const [equation, setEquation] = useState(eqtion);
  const [operation, setOperation] = useState("");
  const [ind, setInd] = useState(0);
  const [result, setResult] = useState("");
  const [equals, setEquals] = useState(false);
  const add = (val) => {
    const inp = input + val;
    if (!isNaN(val)) {
      if (ind === 0) {
        let x = equation[1].number;
        eqtion[1].number = x;
      } else if (ind === 1) {
        let x = equation[0].number;
        eqtion[0].number = x;
      }
      let z = equation[ind].number + val;
      eqtion[ind].number = z;
      setEquation(eqtion);
      console.log(ind, eqtion[ind].number);
      console.log(ind, equation[0].number, equation[1].number);
    }
    setInput(inp);
  };
  const clear = () => {
    eqtion[0].number = "";
    eqtion[1].number = "";
    setInput("");
    setOperation("");
    setEquation(eqtion);
    setInd(0);
    setResult(0);
    setEquals(false);
  };

  const setOp = (val) => {
    setInput(input + val);
    setOperation(val);
    if (equals === false) {
      setInd(1);
    } else {
      setInd(0);
    }
  };

  const solve = () => {
    setInd(1);
    const num1 = parseInt(equation[0].number, 10);
    const num2 = parseInt(equation[1].number, 10);
    if (operation === "+") {
      let res = num1 + num2;
      setResult(res);
      setInput(res);
      eqtion[0].number = res;
      eqtion[1].number = "";
      setEquation(eqtion);
    } else if (operation === "-") {
      let res = num1 - num2;
      setResult(res);
      setInput(res);
      eqtion[0].number = res;
      eqtion[1].number = "";
      setEquation(eqtion);
    } else if (operation === "/") {
      let res = num1 / num2;
      setResult(res);
      setInput(res);
      eqtion[0].number = res;
      eqtion[1].number = "";
      setEquation(eqtion);
    }
    if (operation === "*") {
      let res = num1 * num2;
      setResult(res);
      setInput(res);
      eqtion[0].number = res;
      eqtion[1].number = "";
      setEquation(eqtion);
    }
    if (operation === "%") {
      let res = (num1 / num2) * 100;
      setResult(res);
      setInput(res);
      eqtion[0].number = res;
      eqtion[1].number = "";
      setEquation(eqtion);
    }

    console.log("result is: ", result);
  };
  return (
    <div>
      <div className="result">
        <div className="result-container">{input}</div>
      </div>
      <div className="flex-container">
        <Button value="7" handleClick={add} />
        <Button value="8" handleClick={add} />
        <Button value="9" handleClick={add} />
        <Button value="*" isNum="false" handleClick={setOp} />
      </div>
      <div className="flex-container">
        <Button value="4" handleClick={add} />
        <Button value="5" handleClick={add} />
        <Button value="6" handleClick={add} />
        <Button value="-" isNum="false" handleClick={setOp} />
      </div>
      <div className="flex-container">
        <Button value="1" handleClick={add} />
        <Button value="2" handleClick={add} />
        <Button value="3" handleClick={add} />
        <Button value="+" isNum="false" handleClick={setOp} />
      </div>
      <div className="flex-container">
        <Button value="0" handleClick={add} />
        <Button value="/" isNum="false" handleClick={setOp} />
        <Button value="%" isNum="false" handleClick={setOp} />
        <Button value="=" isNum="false" isEqls="true" handleClick={solve} />
      </div>
      <div className="flex-container">
        <Button value="Clear" isNum="false" handleClick={clear} />
      </div>
    </div>
  );
}

export default App;
