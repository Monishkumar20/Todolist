import React, { useState, useMemo } from "react";

function Usememo() {
  const [number, setNumber] = useState(5);

  function slowSquare(num) {
    console.log("Calculating...");
    return num * num;
  }

  const result = useMemo(() => slowSquare(number), [number]);

  return (
    <div>
      <h2>Square: {result}</h2>

      

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>
    </div>
  );
}
                                     
export default Usememo;

//Stores the result of the calculation

//Recalculates only when the dependency changes