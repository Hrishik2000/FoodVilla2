import React from "react";
import { Outlet } from "react-router-dom"
import Profile_function from "./Profile_function";
import Profile_class from "./Profile_class";
import Profile_class_2 from "./Profile_class_2";
import userContext from "../utils/userContext"

class AboutUs extends React.Component {
  constructor(props){
    super(props);
    console.log("parent-constructor called");
  }

  componentDidMount(){
    // API Call
    console.log("parent-didMount called");
  }
  

  render(){
    

    console.log("parent-render called");
    return(
      <div className="text-center">
      <h1 className="">About US Page</h1>
    {/* <Outlet/> */}
    <Profile_class name={"child 1"}/>
    {/* <Profile_class_2 name={"child 2"}/> */}

    {/* <Profile_function name={"hrishik-function"}/> */}

  {/* using context inside class based component */}
    <userContext.Consumer>
      {/* this value has all data what we recieve */}
      {(value)=>{ console.log(value)}}
    </userContext.Consumer>
    </div>
    )
  }
};


export default AboutUs;


//! Calling sequence in case 1 child & 1 parent is present
//first react does all render phase stuff then updation or commit phase completes of react lifecycle

//! render phase of life cycle
// parent-constructor called
// parent-render called
// child_1_constructor_called
// child_1_render_called
//! commit phase of lifecycle
// child_1_did_mount_called
// parent-didMount called


//! Calling sequence in case 2 child & 1 parent is present

//! render phase of lifecycle
// parent-constructor called
// parent-render called
// child_1_constructor_called child 1
// child_1_render_called child 1
// child_2_constructor_called child 2
// child_2_render_called child 2
//!commit phase  of lifecycle
// child_1_did_mount_called child 1
// child_2_did_mount_called child 2
// parent-didMount called








//! aboutUs functional component
// const AboutUs = () => {
//   return (
//     <>
//    <h1>About US Page</h1>
//     {/* <Outlet/> */}
//     <Profile_class name={"raj-class"}/>
//     <Profile_class_2 name={"raj-class"}/>

//     {/* <Profile_function name={"hrishik-function"}/> */}
//     </>
//   )
// }

// export default AboutUs
