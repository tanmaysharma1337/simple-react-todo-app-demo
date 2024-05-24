import { useState } from 'react'
import './App.css'
import MainWrapper from './components/MainWrapper'
import ToolsMenu from './components/ToolsMenu'
import TodosContainer from './components/TodosContainer'

function App() {
  const [todos,setTodos] = useState([
    "Go to Gym",
    "Go to Class",
    "Go Shopping"
  ]);

  function renderTodos()
  {
    return todos.map(function(value,i){
      return <div id='todo-item'> <p>{i+1}</p> <p key={i}>{value}</p></div>
    })
  }

  function addTodos(newTodo)
  {
    setTodos([...todos,newTodo]);
  }

  return (
    <div id="root-container">
     <MainWrapper>
      <ToolsMenu addTodo={addTodos}></ToolsMenu>
      <TodosContainer>
        {renderTodos()}
      </TodosContainer>
     </MainWrapper>
    </div>
  )
}

export default App
