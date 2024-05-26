import React, { useState } from "react";

const ToolsMenu = ({ addTodo }) => {
  const [todoInputValue, setTodoInputValue] = useState("");

  function passTodo() {
    if (todoInputValue) {
      addTodo((todos) => [...todos, todoInputValue]);
      setTodoInputValue("");
    }
  }

  return (
    <div id="tool-bar">
      <input
        onChange={(e) => setTodoInputValue(e.target.value)}
        value={todoInputValue}
        type="text"
        placeholder="Add new Todo item"
      />
      <button onClick={passTodo}>Add</button>
    </div>
  );
};

export default ToolsMenu;
