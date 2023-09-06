import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"likedmovies",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        }
    }
})

export const{add,remove}=cartSlice.actions;
export default cartSlice.reducer;