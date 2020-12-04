
import React from 'react'
import ReactDOM from 'react-dom'

let username = 'Avantika'
const date = new Date()
const hours = date.getHours()
let timeofDay

if (hours<12){
    timeofDay = 'Morning'
    
}
else if (hours>=12 && hours <17){
    timeofDay='Afternoon'
}
else if(hours>=17 && hours <20){
    timeofDay='Evening'
}
else { timeofDay='Night'}


function Greeting(){

    return(
    <h2>Good {`${timeofDay}, ${username}`}!</h2>
    )
}

export default Greeting