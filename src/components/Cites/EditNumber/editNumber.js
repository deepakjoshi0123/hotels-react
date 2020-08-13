import React, { useState } from "react";
import "./EditNumber.css";
export default function EditNumber(props) {
  const [disable, setdisable] = useState(false);

  function increment() {
    if (props.name === "Rooms") {
      props.setdecrement(false);
    }
    setdisable(false);
    props.setNum(props.num + 1);
    if (props.setchildNumber) {
      props.setchildNumber(props.childNumber + 1);
    }
  }
  function decrement() {
    if (props.name === "Adults") {
      props.setdecrement(true);
    }

    if (props.num >= 2 && props.name !== "Children") {
      props.setNum(props.num - 1);
    }
    if (props.num >= 1 && props.name === "Children") {
      props.setNum(props.num - 1);
    }
    if (props.num <= 2 && props.name !== "Children") {
      setdisable(true);
    }
    if (props.num <= 1 && props.name === "Children") {
      setdisable(true);
    }
    if (props.setchildNumber) {
      props.setchildNumber(props.childNumber - 1);
    }
  }

  return (
    <>
      <span className="editNum">
        {props.name}
        <button onClick={decrement} disabled={disable}>
          {"    "}-{"   "}
        </button>
        <p className="editLine">{props.num}</p>
        <button onClick={increment}>+</button>
      </span>
    </>
  );
}
