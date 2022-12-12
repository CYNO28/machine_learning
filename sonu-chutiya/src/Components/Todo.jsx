import React, { useState } from "react";

const Todo = ({ id, title, onDelHandler, onBookHandler ,onEditHandler}) => {
  const [input, setInput] = useState("");
  return (
    <div
      style={{
        display: "flex",
        margin: "10px auto",
        width: "70px",
        height: "20px",
        alignItems: "center",
      }}
    >
      <p>{title}</p>
      <button onClick={() => onDelHandler(id)}>Delete</button>
      <button onClick={() => onBookHandler(id)}>Bookmark</button>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => onEditHandler(id,input)}>Edit</button>
    </div>
  );
};

export default Todo;
