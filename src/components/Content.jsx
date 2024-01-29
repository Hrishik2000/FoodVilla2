import { useEffect, useState } from "react";
import Card from "./Card.jsx"
//import {RestorantsList} from "../constants.jsx"
import ShimmerText from "./ShimmerText.jsx";
import { Link } from "react-router-dom";
// filtering logic in Helper component
import { filterData } from "../utils/helper.jsx";
import useIsOnline from "../utils/useIsOnline.jsx";
import Offline from "./Offline.jsx";


  
function Content() {
  
  // search functionality
  const [SearchData,setSearchData] = useState();
  //Updated list after search
  const [AllRestorants,setAllRestorents] = useState([])
  const [FilteredRestorents,setFilteredRestorents] = useState([])
  
  //[] -> no depency means useEffect will be called only once when the site loads
  useEffect(()=>{
    FetchData();
  },[])

  async function FetchData(){
    try{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.684889949661027&lng=77.2995937988162&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      if(!data.ok){
        throw new Error( `Failed to Fetch data: ${data.status}`)
      }
      const json = await data.json();
      //console.log(json);

       // optional chaining
      setAllRestorents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestorents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    catch(error){
      console.error("Error Fetchning Data", error.message);
    }

  }

  //custom hook to check online status
  const isOnline = useIsOnline();
  //checking internet functionality
  if(isOnline==false) return <Offline/>;

  //restrict the rendering of AllRestorents is not there
  if(!AllRestorants) return null;

 


  
  //conditional rendering
  return AllRestorants.length == 0 ? <ShimmerText/>: (

    <>
    
    <div className="Search-fn text-center m-3  ">
    <input className=" focus:bg-slate-300 border-2 rounded-md p-2 m-1 border-[#E4AE74]" type="text" placeholder="search"
    value={SearchData} onChange={(e)=>
      {
        setSearchData(e.target.value);
        
      }}/>

    <button  className= "bg-[#0A0C0B] text-[#E4AE74] rounded-md m-1 p-2 hover:bg-[#E4AE74] hover:text-[#0A0C0B]  " onClick={()=>{
         const data = filterData(SearchData,AllRestorants);
        //  console.log(RestorantsList)
        //  console.log(data)
        
         setFilteredRestorents(data);
    }
     
    }>Search</button>
    </div>
    
    {/* {console.log(AllRestorants)}
    {console.log(FilteredRestorents)} */}
    
    {/* render cards */}
    <div className="Restorant-list flex flex-wrap ">
    {  
   (FilteredRestorents.length==0) ? <h1>Meal Not Found</h1> : FilteredRestorents.map((item)=>{
      
    //giving dynamic ID to link  to route to specific route 
       return <Link to={'/restorantMenue/'+ item.info.id} key = {item.info.id}>
        <Card {...item.info} />
        </Link>
    })
    }
    </div>
    </>
  )
  
}

export default Content;