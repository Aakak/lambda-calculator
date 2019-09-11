import React, { useState } from "react";
//import any components needed
//Import your array data to from the provided data file
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

// STEP 2 - add the imported data to state

const Operators = () => {
  const [operatorState] = useState(operators);

  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorState.map(operator => (
        <OperatorButton operators={operator} />
      ))}
    </div>
  );
};

export default Operators;
