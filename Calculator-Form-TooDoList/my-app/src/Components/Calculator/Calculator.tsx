import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import "../../Styles/Calculator.css";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations = ["+", "-", "x", "÷", "="];
type OperationType = "+" | "-" | "x" | "÷" | "=";
type OperationType2 = "+" | "-" | "x" | "÷";
export default function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperatin] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const setNumbers = (value: number) => {
    if (operation === "") {
      setNumber1(number1 + value);
    } else {
      setNumber2(number2 + value);
    }
  };
  const checkOperation = (value: OperationType) => {
    if (number1 == "") return;
    if (value !== "=") {
      setOperatin(value);
    } else {
      if (number2 !== "") {
        let result = 0;
        if (operation === "+") {
          result = +number1 + +number2;
        } else if (operation === "-") {
          result = +number1 - +number2;
        } else if (operation === "x") {
          result = +number1 * +number2;
        } else if (operation === "÷") {
          result = +number1 / +number2;
        }
        setNumber2("");
        setOperatin("");
        setNumber1(result.toString());
      }
    }
  };
  const clearData = () => {
    setNumber2("");
    setOperatin("");
    setNumber1("");
  };

  const deleteDate = () => {
    if (number2 !== "") {
      setNumber2(number2.slice(0, -1));
    } else if (operation !== "") {
      setOperatin(operation.slice(0, -1));
    } else if (number1 !== "") {
      setNumber1(number1.slice(0, -1));
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="calculator">
        <div className="result-box">
          <span className="result">
            {number1} {operation} {number2}
          </span>
        </div>
        <div className="buttons">
          <div className="operation">
            {operations.map((opt) => {
              return (
                <button
                  onClick={() => checkOperation(opt as OperationType2)}
                  key={opt}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          <div className="numbers">
            {numbers.map((number) => {
              return (
                <button onClick={() => setNumbers(number)} key={number}>
                  {number}
                </button>
              );
            })}
          </div>
          <div className="delete">
            <button onClick={deleteDate}>Delete</button>
            <button onClick={clearData}>AC</button>
          </div>
        </div>
      </div>
    </div>
  );
}
