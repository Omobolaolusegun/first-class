import React, {useState} from 'react'

const Counter =()=>{


    // const counter = 0
    const [count, setCount] = useState(0);
    const [User, setUser] = useState({
        name: "Felix",
        school: "SQI"
    });

    const changeName = ()=>{
     setUser({...User, name:"Esther",})
    }
    const increase = ()=>{
        setCount(count + 1);
        
    }
    const decrease = ()=>{
        setCount(count - 1);
    }
    const restart = ()=>{
        setCount(0);
    }
    return(
        <div className="text-center">
            <h3 className="text-center text-blue-600">{count}</h3>
            <button onClick={increase} className="text-white m-2 bg-green-500 rounded p-2">Increase</button>
            <button onClick={decrease} className="text-white m-2 bg-green-500 rounded p-2">decrease</button>
            <button onClick={restart} className="text-white m-2 bg-green-500 rounded p-2">restart</button>

            {User.name}
            {User.school}
            <button onClick={changeName} className="text-white m-2 bg-green-500 rounded p-2">changeName</button>

            
        </div>
        

    )
}

export default Counter;