import { createSlice } from "@reduxjs/toolkit";


const whishlistslice = createSlice({
    name:'whishlistslice',
    initialState: [],
    reducers:{
        addwhishlistslice:(state,action)=>{
            state.push(action.payload)
            
        },
        removeFromWsihlist:(state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        }
    }
})


export const {addwhishlistslice,removeFromWsihlist} = whishlistslice.actions
export default whishlistslice.reducer