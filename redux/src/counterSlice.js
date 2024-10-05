import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0,
    sq:0
    
}


export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        incCount:(state)=>{
            state.count=state.count+1
        },
        deCount:(state)=>{
            state.count=state.count-1
        },
        square:(state,action)=>{
            let sqn=action.payload;
            state.sq=Math.pow(Number(sqn),2)
        }
    }
})

export const {incCount,deCount,square}=counterSlice.actions
export default counterSlice.reducer