import React, { useRef } from "react";

const UseRefExample1 = () => {
  const refContainer = useRef(null);
  const refsub = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(refContainer.current.value);
    refContainer.current.focus();
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <h1 ref={refsub}>Hello World</h1>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default UseRefExample1;
