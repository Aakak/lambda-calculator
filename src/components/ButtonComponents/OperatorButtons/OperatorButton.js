import React from "react";

const OperatorButton = props => {
  return (
    <button classNmae="button-operator">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operators.char}
    </button>
  );
};

export default OperatorButton;
