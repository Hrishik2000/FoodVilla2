import {GET_IMAGE_URL} from "../constants"
export default function Card(
  // object describing
  {cloudinaryImageId,name,
    avgRating,cuisines,
    locality,areaName}
  )
  {

    //to enusre card not overflow due to more data
    const itemsToShow = cuisines.slice(0, 4);

    return (
      <>
      <div className="card w-56 h-[370px]   bg-[#0A0C0B] text-[#E4AE74] rounded-xl p-4  m-3 trasnform-translate hover:scale-105 duration-300 ease-in-out">
      
        <img className="rounded-xl h-44 w-48 mb-3 " src={GET_IMAGE_URL+cloudinaryImageId} alt="" />
   
        
        <h2 className="font-bold">{name}</h2>
        <h3>Rating: {avgRating} stars</h3>
        <h3>{itemsToShow.slice(0,3).join(", ")}</h3>
        <h4 className=" font-medium ">Locality : {locality}, {areaName}</h4>
      </div>
      </>
    )
  }