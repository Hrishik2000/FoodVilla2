import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {GET_IMAGE_URL} from "../constants"
import ShimmerText from "./ShimmerText"
import useFetchMenue from "../utils/useFetchMenue";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import MenueCard from "./MenueCard";

const RestorantMenue = () => {

    const {id} = useParams();

    const SpecificResorantMenue = useFetchMenue(id);
    //console.log(SpecificResorantMenue);

    //! when the button is clicked it dispatches an action which calls reducer a function which update the slice of the store
    const dispatch = useDispatch(); //first call  useDispatch hook
    const updateCart = ()=>{
       dispatch(addItem("grapes"));
    }

  return (!SpecificResorantMenue) ? <ShimmerText/> :(
    <div className="items-center ">
      <div className="Rest-page items-center ">
        <div >{`RestorantMenue id: ${id}`}</div>
        {/* <p className="font-bold">{SpecificResorantMenue?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</p> */}

        {/* [2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info */}

        {/* // [2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name */}

        {/* <img src={GET_IMAGE_URL+SpecificResorantMenue?.cards[0]?.card?.info?.cloudinaryImageId} alt="img" /> */}
        <h3>Area:{SpecificResorantMenue?.cards[0]?.card?.card?.info?.areaName}</h3>
 
        <h3>Star Ratings:{SpecificResorantMenue?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.ratings?.aggregatedRating?.rating}</h3>
        <h1 className="font-bold">Menue</h1>
        <button className="bg-[#E4AE74] p-1 border border-black rounded-md " onClick={
          ()=>{
            updateCart();
          }
        }>click Me</button>
        <div className="flex flex-wrap">
            {SpecificResorantMenue?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item)=>{
               console.log(item.card.info);
              return(
                <MenueCard  info = {item.card.info}/>
              )
                })}
        </div>
      </div>
    </div>
   
  )
}
export default RestorantMenue;

