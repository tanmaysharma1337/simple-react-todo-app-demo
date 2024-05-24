import React, { useState } from "react";

const ToolsMenu = ({ addTodo }) => {
  const [todoInputValue, setTodoInputValue] = useState("");

  function passTodo() {
    if (todoInputValue) {
      addTodo(todoInputValue);
      setTodoInputValue("");
    }
  }

  return (
    <div id="tool-bar">
      <input
        onChange={(e) => setTodoInputValue(e.target.value)}
        value={todoInputValue}
        type="text"
      />
      <button onClick={passTodo}>Add</button>
    </div>
  );
};

export default ToolsMenu;
