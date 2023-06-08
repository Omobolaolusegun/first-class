// import axios from 'axios'

// import baseUrl from '../baseUrl'
import React,{useState} from 'react'
const SignIn = () => {
    const userObject = {firstname:"",lastname:"",age:"",dept:"",date:"",school:""}
    const [user, setUser] = useState(userObject)
    const [allUsers, setallUsers]= useState([])
    const [indexToEdit, setindexToEdit]= useState(null)
    const [editedObj, seteditedObj]= useState(userObject)
    
    const inputIsChange = (e)=>{
        if (indexToEdit == null){
            setUser({...user,[e.target.name]: e.target.value})
            console.log(user)
        } else{
            seteditedObj({...editedObj, [e.target.name]: e.target.value})
        }
    }
    
    const submitUser = ()=>{
        if(indexToEdit === null){
            setallUsers([...allUsers, user])
            const saveUsers = [...allUsers, user]
            setUser(userObject)
            localStorage.setItem("allUsers", JSON.stringify(saveUsers))
        } else{
            const newUsers = [...allUsers]
            allUsers[indexToEdit] = {...newUsers[indexToEdit], ...editedObj};
            setallUsers([...allUsers])
            setindexToEdit(null)
            seteditedObj(userObject)
            localStorage.setItem("allUsers", JSON.stringify(allUsers))
        }
                    
                    const clearMe = (i)=>{
                        allUsers.splice(i,1)
                        setallUsers([...allUsers])
                        localStorage.setItem("allUsers", JSON.stringify(allUsers))
                        
                    }

                    const editItem= (i, e)=> {
                        var answer = prompt("what is your name?");
                        alert("your name is" + answer);
                        setindexToEdit.push(i)
                        // setindexToEdit(i)
                        var mee = allUsers[i]
                        seteditedObj(mee)
                        console.log(editedObj) 
                        console.log(editedObj)     
                    }
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="col-6 shadow p-3 m-3 w-100">
                    <h1>hello</h1>
                </div>
            </div>
        </div>
          <div className="container">
              <div className="row">
                  <div className="col-6 shadow w-100 m-3 p-4 bg-primary">
                  <h1 className="text dark text-center mt-2 bg-secondary fw-bold fs-4">Create An Account With Us</h1>
                  <div className="container-fluid">
            <div className="col-4 shadow rounded  m-auto mt-3 text-center p-2 m-2 bg-warning">
            <input name='firstname' placeholder='firstname' value={indexToEdit == null? user.firstname: editedObj.firstname} onChange={inputIsChange} className="border rounded p-2 m-2 outline none"/>
            <input name="lastname" placeholder="lastname" value={indexToEdit == null? user.lastname: editedObj.lastname} onChange={inputIsChange} className="border rounded p-2 m-2 outline none"/>
            <input name="age" placeholder="age" value={indexToEdit == null? user.age: editedObj.age} onChange={inputIsChange} className="border rounded p-2 m-2 outline none"/>
            <input name="dept" placeholder="dept" value={indexToEdit == null? user.dept: editedObj.dept} onChange={inputIsChange} className="border rounded p-2 m-2 outline none"/>
            <input name="school" placeholder="school" value={indexToEdit == null? user.school: editedObj.school} onChange={inputIsChange} className="border rounded m-2 p-2 outline none"/>
            <input type="date" name="date" value={indexToEdit == null? user.date: editedObj.date} onChange={inputIsChange} className="border rounded m-2 p-2 outline none"/>
            <button onClick={submitUser}className="btn btn-primary w-100 mt-3">{indexToEdit === null? "Sign up": "Update"}</button>
            </div>

        </div>
        {
            allUsers.map((each, i)=>(
             <div key={i} className={`bg-light border border-green border-3 col-lg-6 m-auto mt-3 shadow rounded text-center fw-bold fs-2`}>{each.firstname} {each.lastname} {each.dept}  {each.school} {each.date} {each.age}
             <Esther clearMe={clearMe} i ={i} editItem={editItem}/>
             
            
             </div>
             
            
             
            )  
            
         )
         }
                  </div>
              </div>
              </div>  
        </>
    )
}

const Esther = ({clearMe,editItem}, {i})=>{
    return(<div>
    <button className="btn-btn warning m-auto" onClick={()=>clearMe(i)}>Delete</button>
   <button className="btn btn-success m-auto" onClick={()=>editItem(i)}>Edit</button><br/><br/>
    </div>
    )
}



                
                
                    <>
        </>
    
}

export default SignIn