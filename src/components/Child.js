import React from 'React'

const Child = ({myName, user, logName})=>{
    return(
        <div>I'm the child, {myName}
        <h3>{user.name}</h3>
        <small>{user.school}</small>
        <button onClick={logName}>logName</button>
        </div>
        
        )
    }
    
    export default Child;