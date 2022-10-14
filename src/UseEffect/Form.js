import { Input } from "postcss";
import React, { useState } from "react";

function Form() {
  //   const [firstName, setFirstName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [age, setAge] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const pupil = {
        ...person,
        id: new Date().getTime().toString(),
      };
      setPeople([...people, pupil]);
      setPerson({ firstName: "", email: "", age: "" });
    } else {
      console.log("Empty Values");
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPerson({ ...person, [name]: value });
    // setPeople({ ...people, person });
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (person.firstName && person.email && person.age) {
  //       const pupil = {
  //         id: new Date().getTime().toString(),
  //         firstName: person.firstName,
  //         email: person.email,
  //         age: person.age,
  //       };
  //       setPeople((people) => {
  //         return [...people, pupil];
  //       });
  //       console.log(people);
  //       //   setFirstName("");
  //       //   setEmail("");
  //       //   setPerson("");
  //     } else {
  //       console.log("I am shitty");
  //     }
  //   };
  return (
    <>
      <article>
        <form
          action=""
          className=" bg-fuchsia-900 p-20 flex gap-8 flex-col mt-12"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center">
            <label htmlFor="firstName" className=" mr-1">
              Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={person.firstName}
              className="w-full"
              onChange={(e) => {
                // setFirstName(e.target.value);
                // setPerson({ ...person, firstName: e.target.value });
                handleChange(e);
              }}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="email" className=" mr-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full"
              value={person.email}
              onChange={(e) => {
                // setEmail(e.target.value);
                // setPerson({ ...person, email: e.target.value });
                handleChange(e);
              }}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="age" className=" mr-1">
              Age:
            </label>
            <input
              type="text"
              name="age"
              id="age"
              className="w-full"
              value={person.age}
              onChange={(e) => {
                // setPerson({ ...person, age: e.target.value });
                // setAge(e.target.value);
                handleChange(e);
              }}
            />
          </div>
          <h1>{person.firstName}</h1>
          <h2>{person.email}</h2>
          <button type="submit" className="m-auto bg-amber-700 p-1 rounded-lg">
            Add Person
          </button>
        </form>
        {people.map(({ firstName, email, id, age }) => {
          return (
            <div key={id}>
              <li>{firstName}</li>
              <li>{age}</li>
            </div>
          );
        })}
      </article>
    </>
  );
}

export default Form;
