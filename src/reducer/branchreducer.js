import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

export const slice=createSlice({
    name:'branch',
    initialState:{
        branch:[],
        current:false
    },
    reducers:{
        get:(state,action)=>{
                state.branch=action.payload.object
        },
        save:(state,action)=>{
            state.current=!state.current
        }
    }
})

export const getbranch=(data)=>apiCall({
    url:'/branch/get-all-by-business-id/'+data,
    method:'get',
    data,
    onSuccess:slice.actions.get.type
})

export const savebranch=(data)=>apiCall({
    url:'/branch',
    method:'post',
    data,
    onSuccess:slice.actions.save.type
})

export const editbranchs=(data)=>apiCall({
    url:'/branch/'+data.id,
    method:'put',
    data,
    onSuccess:slice.actions.save.type
})

export const deletebranchs=(data)=>apiCall({
    url:'/branch/'+data,
    method:'delete',
    data,
    onSuccess:slice.actions.save.type
})

export default slice.reducer