import React, { useEffect, useState } from "react";
const url = " https://api.github.com/users/Azeez-Ismaila";
function Conditional() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default User");
  const [value, setValue] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        console.log(user);
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>There was an Error</div>
      ) : (
        <div>{user}</div>
      )}
      {value ? <h1>Azeez You too good</h1> : <h2>Azeez you too bad</h2>}
      <button
        className="bg-black text-white rounded p-2 block "
        onClick={() => {
          setValue(!value);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default Conditional;
