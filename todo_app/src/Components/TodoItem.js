import React from 'react'
import './App.css'



function TodoItem(props){
   
    return(
        <div className='todo-item'>
            
             <input type='checkbox' id='taskId'/>
             <label for='taskId' >{props.taskName}</label><br/>
        </div>
    )
}

export default TodoItem