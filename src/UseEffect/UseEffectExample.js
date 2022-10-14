import React, { useEffect, useState } from "react";
import data from "../useState/data";
function UseEffectExample() {
  const [value, setValue] = useState("wow");
  const [size, setSize] = useState(window.innerWidth);
  const url = "https://api.github.com/users";
  const checksize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(data);
    setValue(data);
    console.log(data);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", checksize);
    console.log(size);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checksize);
    };
  }, [size]);
  useEffect(() => {
    console.log("I Worked");
  }, [value]);
  return (
    // <div>
    //       <h1>window size is {size} px</h1>
    //   <h1>{value}</h1>
    //   <button
    //     onClick={() => {
    //       value === "wow" ? setValue("yay") : setValue("wow");
    //     }}
    //   >
    //     Click
    //   </button>
    // </div>
    <div className="grid grid-cols-3 gap-14">
      {data.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <h2>{data.age}</h2>
            <img src={data.image} alt="" className="rounded-2xl h-1/3" />
          </div>
        );
      })}
    </div>
  );
}

export default UseEffectExample;
