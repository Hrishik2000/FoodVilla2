import { useContext } from "react";
import userContext from "../utils/userContext"



const contact = () => {

  const {user,setDynamicUser} =useContext(userContext);

  return (
    <>
    <input  className="border border-black bg-slate-400" value={user.name} onChange={(e)=>
      setDynamicUser({
        // It updates the user object by creating a new object with all the existing properties of user (using the spread operator ...user), and then it updates the name property with the new value from the input field (e.target.value).
        ...user,//it creates a shallow copy of main object & retains all property of object untouched & update only "name" property
        name : e.target.value
      })} />

      <input  className="border border-black bg-slate-400" 
      value={user.email} onChange={(e)=>
      setDynamicUser({
        ...user,//if not use this name will disapear when i update email id & vise versa in above case
        email : e.target.value
      })} />      
   <h1>Contact PAGE</h1>
    </>
    
  )
}


export default contact;
