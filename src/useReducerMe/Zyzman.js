import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "changeName") {
    return [
      ...state,
      {
        id: 3 * Math.random(),
        name: "ola",
        age: "35",
        clan: "bss",
      },
    ];
  }
};
const defaultState = [
  {
    id: 1,
    name: "Azeez",
    age: "30",
    clan: "Msc",
  },
  {
    id: 2,
    name: "zyzman",
    age: "33",
    clan: "Bsc",
  },
];
function Zyzman() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        {state.map((each) => (
          <div>
            <h1>{each.name}</h1>
            <h2>{each.age}</h2>
            <h3>{each.clan}</h3>
          </div>
        ))}
      </div>
      <button onClick={() => dispatch({ type: "changeName" })}>
        Toggle name
      </button>
    </div>
  );
}

export default Zyzman;
