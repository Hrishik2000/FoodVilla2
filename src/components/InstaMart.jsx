import { useState } from "react";

const Section = ({name,data})=>{
    // STATE IS Managed by child only & here no sibling could update each others state
    // hence auto collapsable accordian cant be made like this(one user open one accordion then another accordiaon will close automaticaly)
    const [isActive , setIsActive] =useState(false);
    return(<>
        <div className="border border-black">
            <h1>{name}</h1>
            {/* toggel between show or hide button */}
            { isActive ? <button onClick={()=>{setIsActive(false)}} className="bg-black text-white p-1 rounded-md  border border-black">hide</button> :
                        <button onClick={()=>{setIsActive(true)}} className="bg-black text-white p-1 rounded-md border border-black">show</button>}
            {/* p tag will only be rendered when isActive is true */}
            { isActive && <p>{data}</p> }
        </div>
    </>)      
}

//!LIFTING STATE UP EXAMPLE
    //here simlings state(isVisible, useIsActive) is controlled by Parent of all siblings
const Section2 = ({name,data, isVisible, setIsActive})=>{
   
    return(<>
        <div className="border border-black">
            <h1>{name}</h1>
            {/* toggel between show or hide button */}
            { isVisible ? <button onClick={()=>{setIsActive(false)}} className="bg-black text-white p-1 rounded-md  border border-black">hide</button> :
                        <button onClick={()=>{setIsActive(true)}} className="bg-black text-white p-1 rounded-md border border-black">show</button>}
            {/* p tag will only be rendered when isActive is true */}

            { isVisible && <p>{data}</p> }
            
        </div>
    </>)      
}

const InstaMart = ()=>{
    
     // state for auto accordion style
    //  these states are passed as props to childern
    // optimized code from previous version. as we have to track only is which component is needed to show 
    // to do that we can pass keys to all sections & check the key
    const [visibileSection , setVisibleSection] = useState("profile");
    return(
        
        <>

        <h1>"Instamart Component"</h1>
        <h2>"Having 100's Comonents Inside"</h2>

        Normal accordion
       <div className="border border-black p-4 m-2">
        <h1>NORMAL ACCORDION STYLE</h1>
       <Section name = "Profile Instamart" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum."/>
        <Section name = "About Instamart" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum."/>
        <Section name = "Carrier Instamart" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum."/>
       </div>


        {/*Auto closing accordion  */}
       <div className="border border-black p-4 m-2">
        <h1>CUSTOMIZABLE/AUTO CLOSING ACCORDION STYLE</h1>
        <Section2 name = "Profile Instamart2" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum."
        isVisible={visibileSection === "profile"} 

        
        setIsActive={(isVisible)=>{
            isVisible ? setVisibleSection("profile") : setVisibleSection(); 
           }}/>
        <Section2 name = "About Instamart2" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum." 
        isVisible={visibileSection === "about"} 
        setIsActive={(isVisible)=>{
            isVisible ? setVisibleSection("about") : setVisibleSection(); 
           }}/>
        <Section2 name = "Carrier Instamart2" data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolorum cum explicabo officiis enim animi rerum, dolores quos laborum, architecto minima sequi. Rerum, voluptate quis nihil aliquam asperiores necessitatibus dolorum." 
        isVisible={visibileSection === "carrier"}
        setIsActive={(isVisible)=>{
            isVisible ? setVisibleSection("carrier") : setVisibleSection(); 
           }}/>
       </div>
        
        </>)
}

export default InstaMart;