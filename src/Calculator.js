import React, { useState } from "react";

function Calculator() {
  const ButtonValues = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "+",
    "0",
    "00",
    "=",
    "-",
    "C",
    ".",
    "%",
    "**",
  ];
  const handleResult = (e) => {
    setResult(e.target.value);
  };
  const [result, setResult] = useState("");
  return (
    <div className=" bg-black  font-bold text-3xl text-center w-11/12 h-auto   my-auto   p-4  md:m-10 md:w-2/6 md:p-9 rounded-lg">
      <div className="   grid grid-cols-4 gap-4 p-2 md:p-0">
        <input
          className="block w-full p-10 px-6 h-28 text-right text-6xl col-span-4 rounded-xl"
          defaultValue={result}
          placeholder="0"
          type="text"
          name=""
          id=""
        />
        {ButtonValues.flat().map((btn, i) => (
          <button
            key={i}
            className="  md:p-4 bg-white rounded-lg"
            value={btn}
            onClick={(e) => {
              btn === "="
                ? setResult(eval(result).toString())
                : btn === "C"
                ? setResult("")
                : setResult(result.concat(e.target.value));
            }}
          >
            {btn}
          </button>
        ))}
        {/* <button
          className=" md:p-6 bg-white  rounded-lg"
          onClick={() => setInput(7)}
        >
          7
        </button>

        <button className=" p-3 md:p-6 bg-white  rounded-lg">8</button>
        <button className="  md:p-6 bg-white  rounded-lg">9</button>
        <button className=" md:p-6 bg-white  rounded-lg">/</button>
        <button className="md:p-6 bg-white  rounded-lg">4</button>
        <button className="p-3 md:p-6 bg-white  rounded-lg">5</button>
        <button className=" md:p-6 bg-white  rounded-lg">6</button>
        <button className=" md:p-6 bg-white  rounded-lg">X</button>
        <button className=" md:p-6 bg-white  rounded-lg">1</button>
        <button className="p-3 md:p-6 bg-white  rounded-lg">2</button>
        <button className=" md:p-6 bg-white  rounded-lg">3</button>
        <button className=" md:p-6 bg-white  rounded-lg">+</button>
        <button className=" p-3 md:p-6 bg-white  rounded-lg">0</button>
        <button className=" md:p-6 bg-white  rounded-lg">.</button>
        <button className=" md:p-6 bg-white  rounded-lg">=</button>
        <button className=" md:p-6 bg-white  rounded-lg">-</button> */}
      </div>
    </div>
  );
}

export default Calculator;
