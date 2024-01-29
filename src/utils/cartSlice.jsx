import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    //name of the slice
    name: "cart",

    //initially what need to have inside the slice
    initialState:{
        // empty items list
        items: []
    },

    //reducers are a big object of all functions which will be called to update this slice (cart slice) in store from our App.
    //! reducers
    reducers:{
        addItem: (state,action)=>{state.items.push(action.payload);},
        removeItem: (state, action) => {
          console.log(action)
          console.log(action.payload)
          console.log(state)
          console.log(state.items)
          },
        emptyCart: (state)=>{state.items = []},
    }

})

// by defualt slice exports reducers

export default cartSlice.reducer //! reducer

// all dispatch actions are destructured & exported
export const {addItem,removeItem,emptyCart} = cartSlice.actions;