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

export const gettolovholati=(data)=>apiCall({
    url:'/branch/get-all-by-business-id/'+data,
    method:'get',
    data,
    onSuccess:slice.actions.get.type
})

export default slice.reducer