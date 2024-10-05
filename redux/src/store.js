import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

export const stores=configureStore({
    reducer:{
        counter:counterReducer
    },
})