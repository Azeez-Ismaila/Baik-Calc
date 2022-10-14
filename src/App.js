import React from "react";
import Calculator from "./Calculator";
import "./index.css2";
import Usereducer from "./useReducer/Usereducer";
import Zyzman from "./useReducerMe/Zyzman";

function App() {
  return (
    <div className="m-auto flex items-center justify-center bg-violet-600">
      {/* <Usereducer /> */}
      {/* <Zyzman /> */}
      <Calculator />
    </div>
  );
}

export default App;
