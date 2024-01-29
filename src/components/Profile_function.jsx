import { useState } from "react";

const Profile_function = (props) => {
  const [counter,setcounter] = useState(0); 
  const [counter2,setcounter2] = useState(0); 
  return (
      <div className="FunctionComponent">
      <h1>Profile_Functional_Component</h1>
      <h2>{props.name}</h2>
      <h2>counter value: {counter}</h2>
      <h2>counter 2 value: {counter2}</h2>
      <button onClick={()=>{setcounter(counter+1)}}>click</button>
      </div>
      
    )
  }
  
  export default Profile_function;