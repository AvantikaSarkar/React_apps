import React from 'react'
import './Components/App.css'
import Greeting from './Components/Greeting'
import TodoItem from './Components/TodoItem'
import tasks from './Components/Tasks'


class TodoList extends React.Component{


  constructor(){
    super()
    this.state={
      todos : tasks
    }
    this.HandleChange = this.HandleChange.bind(this)
}

  HandleChange(tid){

    console.log("value changed", tid)

    this.setState (prevState => {
      const updatedTodos = prevState.todos.map(todoItem => {
        if (todoItem.taskId === tid )
        {
          return {
            ...todoItem,
            completed: !todoItem.completed
          }
        }
        
        return todoItem
      })

      console.log(updatedTodos)
      return {
        todos : updatedTodos
      }
    })
  }


  render(){
    const taskArray = this.state.todos.map( tasks => <TodoItem key={tasks.taskId} item= {tasks} HandleChange ={this.HandleChange}/>)
  return (
    <div className='todo-list'>
      <Greeting />
      <h2>Your tasks for the day :</h2>
      {taskArray}
    </div>
  )
}
}

export default TodoList




