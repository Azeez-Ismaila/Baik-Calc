import React, { useState } from "react";
import data from "./data";
function UseStateErrorExample() {
  const [people, setpeople] = useState(data);
  const handleClick = () => {
    setpeople([]);
  };
  //   const delItem = (id) => {
  //     const newpeople = people.filter((person) => person.id !== id);
  //     setpeople(newpeople);
  //   };
  const delItem = (id) => {
    setpeople(people.filter((person) => person.id !== id));
    console.log(people);
  };
  return (
    <React.Fragment>
      {people.map(({ id, name, age, image }) => (
        <div className="person" key={id}>
          <img src={image} alt="no img" />
          <h3>{name}</h3>
          <h4>{age}</h4>
          <button
            onClick={() => {
              delItem(id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <button className="btn" onClick={handleClick}>
        Clear Items
      </button>
    </React.Fragment>
  );
}

export default UseStateErrorExample;
