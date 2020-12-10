import React from 'react'
import './App.css'



function TodoItem(props){

    const completedStyle ={
        fontStyle :'italic',
        color : "#cdcdcd",
        textDecoration : "line-through"
    }
   
    return(
        <div className='todo-item'>
            
             <input 
                type='checkbox' 
                id='taskId' checked ={props.item.status} 
                onChange={() => props.HandleChange(props.item.taskId) }
             />
             <label for='taskId' style = {props.item.completed ? completedStyle : null}>{props.item.taskName}</label><br/>
        </div>
    )
}

export default TodoItem