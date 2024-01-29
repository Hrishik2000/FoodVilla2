import { useEffect, useState } from "react";

const useIsOnline = ()=>{

    const [isOnline,setIsOnline] = useState(true);

   

    //the should be run only once when website loads
    useEffect(()=>{

        const ToggleTrue = ()=>{
            setIsOnline(true);
        }
    
        const ToggleFalse = ()=>{
            setIsOnline(false);
        }


        window.addEventListener("online",ToggleTrue);
   
        window.addEventListener("offline",ToggleFalse);


        //unmounting of event listener when moved from one component to another component
        //cleanup of added event listner so that previously attached event listner kills
        return ()=>{
            window.removeEventListener("online",ToggleTrue)
            window.removeEventListener("offline",ToggleFalse);
        }
            
        
    },[]);
   
//    console.log(isOnline)
    return isOnline;
    

}


export default useIsOnline;