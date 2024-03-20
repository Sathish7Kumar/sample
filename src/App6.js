import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { IoLogoApple } from "react-icons/io";

const App6 = () => {

  const [input, setinput] = useState("");

  const [newName, setnewName] = useState([]);

  const handleClick = () => {
    if (input.trim() !== "") {
      setnewName([...newName, input]);
    }
  };
  const handleDelete = (i) => {

    const newItem = [...newName];

    newItem.splice(i, 1);
    setnewName(newItem);
  };
  return (
    <div>
      <label htmlFor="task">
        <IoLogoApple style={{ color: "red", fontSize: "35px" }} /> Enter your
        Task :{" "}
      </label>
      <input  type="text" id="task" onChange={(e) => setinput(e.target.value)} />
      <Button onClick={handleClick}>Add</Button>
      <ul>
        {newName.map((e, i) => (
          <li key={i}>
            {e}
            <Button onClick={() => handleDelete(i)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App6;
