
import {GET_IMAGE_URL} from "../constants"
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

export default function CartCard(
  // object describing
  {name,imageId,defaultPrice,price,description, id}
  )
  {
   

    const dispatch = useDispatch();
    const clearItem = ()=>{
        dispatch(removeItem(id));
     }


    return (
      <>
      
      <div className="card w-56 h-[550px]  bg-[#0A0C0B] text-[#E4AE74] rounded-xl p-4 m-3 ">
        <img className="rounded-xl" src={GET_IMAGE_URL+imageId} alt="img" />
        <h2 className="font-bold">{name}</h2>
        <h2>{description}</h2>
        <h2>{id}</h2>
        <div className="flex justify-between">
        <h3> Price:
                       {defaultPrice
                         ? Math.floor(defaultPrice / 100)
                           : Math.floor(price / 100)}
                         </h3>

        <button className="bg-green-600 text-white font-bold p-1 rounded-md " onClick={()=>clearItem()}>remove Item</button>
        </div>
       
        
      </div>
      </>
    )
  }