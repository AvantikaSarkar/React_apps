import React from 'react'
import './Components/App.css'
import Greeting from './Components/Greeting'
import TodoItem from './Components/TodoItem'
import tasks from './Components/Tasks'


function TodoList(){

  const taskArray = tasks.map( tasks => <TodoItem key={tasks.taskId} taskName={tasks.taskName} />)


  return (
    <div className='todo-list'>
      <Greeting />
      <h2>Your tasks for the day :</h2>
      {taskArray}
    </div>
  )
}

export default TodoList;