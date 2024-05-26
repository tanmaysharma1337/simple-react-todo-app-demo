import { useState } from "react";
import "./App.css";
import MainWrapper from "./components/MainWrapper";
import ToolsMenu from "./components/ToolsMenu";
import TodosContainer from "./components/TodosContainer";
import TodoState from "./components/TodoState";

function App() {
  const [todos, setTodos] = useState([
    "Go to Gym",
    "Go to Class",
    "Go Shopping",
  ]);

  function renderTodos() {
    return todos.map(function (value, i) {
      return (
        <div key={i} id="todo-item">
          {" "}
          <p onClick={() => removeTodos(i)}>{i + 1} </p> <TodoState>{value}</TodoState>
        </div>
      );
    });
  }

  function removeTodos(index) {
    setTodos(todos.filter((v, i) => i !== index));
  }

  function addTodos(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <div id="root-container">
      <MainWrapper>
        <ToolsMenu addTodo={addTodos}></ToolsMenu>
        <TodosContainer>{renderTodos()}</TodosContainer>
      </MainWrapper>
    </div>
  );
}

export default App;
