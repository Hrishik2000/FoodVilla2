import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../utils/cartSlice";

const store = configureStore({
    // holds the list of reducers from different slices
        reducer:{ //! reducer
            // slice 1 which is cart Slice
            cart:cartSlice,
            
        }
})

export default store;

/*
    step 1 create store 
            - configureStore - RTK
            store = configureStore({})
            
    step 2 provide store to app
            - <Provider store = {store}> </Provider> - react-redux
    step 3 create slices using 
            - createSlice - RTK
            -createSlice({
                name: "",

                initialState: {
                    items: [],
                } 

                reducers: {
                    addItems : ()=>{},
                    removeItems : ()=>{},
                    emptyItems : ()=>{}
                }
            })

             all dispatch actions are destructured & exported
            export const {addItems, removeItems,emptyItems} = cart.actions
            export default cart.reducer
    
    step 4 provide created slice to store
             store = configureStore({

                reducer: {
                    cart:cartSlice,
                }
             })

*/