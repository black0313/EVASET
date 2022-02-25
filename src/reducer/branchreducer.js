import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

export const slice=createSlice({
    name:'branch',
    initialState:{
        branch:[]
    },
    reducers:{
        get:(state,action)=>{
                state.branch=action.payload.object
        }
    }
})

export const getbranch=(data)=>apiCall({
    url:'/branch/get-all-by-business-id/'+data,
    method:'get',
    data,
    onSuccess:slice.actions.get.type
})

export default slice.reducer