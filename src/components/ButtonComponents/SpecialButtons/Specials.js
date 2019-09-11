import React, { useState } from "react";
//import any components needed
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

// STEP 2 - add the imported data to state

const Specials = () => {
  const [specialsState] = useState(specials);

  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialsState.map(special => (
        <SpecialButton specials={special} />
      ))}
    </div>
  );
};

export default Specials;
