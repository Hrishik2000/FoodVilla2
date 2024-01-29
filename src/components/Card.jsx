import { useContext } from "react";
import {GET_IMAGE_URL} from "../constants"
import userContext from "../utils/userContext"
export default function Card(
  // object describing
  {cloudinaryImageId,name,
    avgRating,cuisines,
    locality,areaName}
  )
  {
    const {user} = useContext(userContext)

    //to enusre card not overflow due to more data
    const itemsToShow = cuisines.slice(0, 4);

    return (
      <>
      <div className="card w-56 h-[450px]   bg-[#0A0C0B] text-[#E4AE74] rounded-xl p-4 m-3 trasnform-translate hover:scale-105 duration-300 ease-in-out">
      
        <img className="rounded-xl " src={GET_IMAGE_URL+cloudinaryImageId} alt="" />
   
        
        <h2 className="font-bold">{name}</h2>
        <h3>Rating: {avgRating} stars</h3>
        <h3>{itemsToShow.join(", ")}</h3>
        <h4 className=" font-medium ">Locality : {locality}, {areaName}</h4>
        <h2>{user.name}</h2>
      </div>
      </>
    )
  }