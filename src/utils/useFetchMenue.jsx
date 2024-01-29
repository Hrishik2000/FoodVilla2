import { useState,useEffect } from "react";

const useFetchMenue = (id)=>{

  // this state will change as we click on another restorent menue will update & initially  empty array is passed to it
const [SpecificResorantMenue , setSpecificResorantMenue]  = useState(null)

useEffect(()=>{
    FetchMenue();
    //console.log("called")
},[id]);

async function FetchMenue(){
    //const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.684889949661027&lng=77.2995937988162&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.684889949661027&lng=77.2995937988162&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await response.json();
      console.log(json)
      console.log(json.data)
      console.log( json.data.cards);

      setSpecificResorantMenue(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
      setSpecificResorantMenue({}); // Set an empty object in case of an error
    }

    
}

  return SpecificResorantMenue;
}

export default useFetchMenue;
    