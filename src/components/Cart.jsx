import { useDispatch, useSelector } from "react-redux"
import CartCard from "./CartCard"
import {emptyCart} from "../utils/cartSlice";


export default function Cart(){
    // taking subscription of store
    const cartItems = useSelector((store)=>store.cart.items)
    //console.log(cartItems)

    const dispatch = useDispatch();
    const clearCart = ()=>{
        dispatch(emptyCart());
     }

     

    return( 
        <>
            {cartItems.length === 0 ? <p className="text-[#0A0C0B] text-center font-bold">Please add food into the cart...</p>
            : <>
            <div className="flex flex-wrap">
            {/* <h1>hello</h1> */}
            
           {cartItems.map((cartItems)=>{
              
                return <CartCard  key ={cartItems.id } {...cartItems}/>
            })}
            </div>
            <button className="bg-green-600 text-white font-bold p-1 rounded-md mx-auto block m-3 "
             onClick={() => clearCart()}>Clear Cart</button>
            </>}


        </>
        
        
    )
}