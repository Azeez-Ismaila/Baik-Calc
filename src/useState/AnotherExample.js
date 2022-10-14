import React, { useState } from "react";

function AnotherExample() {
  const [person, setPerson] = useState({
    name: "Azeez",
    age: 24,
    profession: "Developer",
  });
  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.profession}</h3>
      <button
        onClick={() => {
          setPerson({
            name: "zyzman",
            age: "25",
            profession: "Yeah who",
          });
        }}
      >
        Change Everything
      </button>
    </div>
  );
}

export default AnotherExample;
