import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

export const slice=createSlice({
    name:'tolovholati',
    initialState:{
        tolovholati:[]
    },
    reducers:{
        get:(state,action)=>{
            state.tolovholati=action.payload.object
        }
    }
})

export const gettolovholati=()=>apiCall({
    url:'/paystatus',
    method:'get',
    onSuccess:slice.actions.get.type
})

export default slice.reducer