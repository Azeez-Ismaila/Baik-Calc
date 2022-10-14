import React, { useReducer, useState } from "react";
import data from "../useState/data";
import Modal from "./Modal";
// reducer function
const reducer = (state, action) => {
  if (action.type === "Testing") {
    console.log(state);
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: "Item added",
    };
  } else if (action.type === "learn") {
    console.log("I am improving");
    return state;
  }
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello world",
};
const Usereducer = () => {
  const [name, setName] = useState("");
  //   const [people, setPeople] = useState(data);
  //   const [showmodal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (name) {
      //   setShowModal(true);
      //   setPeople([...people, { id: new Date().getTime().toString(), name }]);
      dispatch({ type: "Testing" });
    } else {
      //   setShowModal(true);
    }
  };
  return (
    <div className="flex items-center justify-center flex-col">
      {state.people.map(({ name, age, image, id }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
            {/* <h2>{age}</h2>
            <img src={image} alt="" className="w-1/12" /> */}
          </div>
        );
      })}
      <button
        className="bg-black text-stone-100"
        onClick={() =>
          //   setShowModal(!showmodal)
          dispatch(!state.isModalOpen)
        }
      >
        Toggle
      </button>
      <button onClick={() => dispatch({ type: "learn" })}>
        Dispatch toggle
      </button>
      <div>
        {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      </div>
      <h1>{name}</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="rounded bg-black text-white px-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default Usereducer;
