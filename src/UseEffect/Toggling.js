import React, { useEffect, useState } from "react";

function Toggling() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        className="bg-black text-2xl text-white rounded-xl"
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      {show && <Item />}
    </div>
  );
}

export default Toggling;
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div>
      <h1>Window</h1>
      <h2>{size}PX</h2>
    </div>
  );
};
