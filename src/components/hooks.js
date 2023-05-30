import React, { useState } from "react";

function Example() {
  const [name, setName] = useState("Vibhu");
  const changeName = () => {
    setName("Saini");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}> Click me </button>
    </div>
  );
}

export default Example;
