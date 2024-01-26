import React, { useState, useEffect } from "react";

function Form() {
  const [state, setState] = useState({
    username: "",
    age: null,
    errormessage: ""
  });
  const handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    let error = "";
    if (name === "age") {
      if (value !== "" && !Number(value)) {
        error = "Your age must be a number";
      }
    }
    setState({ ...state, [name]: value, errormessage: error });
  };

  return (
    <form>
      <h1>
        Hello {state.username} {state.age}
      </h1>
      <p>Enter your name:</p>
      <input type="text" name="username" onChange={handleChange} />
      <p>Enter your age:</p>
      <input type="text" name="age" onChange={handleChange} />
      {state.errormessage}
    </form>
  );
}

export default Form;