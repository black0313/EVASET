import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

export const slice=createSlice({
    name:'kg',
    initialState:{
        kg:[],
        current:0
    },
    reducers:{
        get:(state,action)=>{
            state.kg=action.payload.object
        },
        save:(state,action)=>{
            state.current+=1
            toast.success('SaqLandi')
        }
    }
})

export const getkg=(data)=>apiCall({
    url:'/measurement/get-by-business/'+data,
    method:'get',
    data,
    onSuccess:slice.actions.get.type
})
export const savekg=(data)=>apiCall({
    url:'/measurement',
    method:'post',
    data,
    onSuccess:slice.actions.save.type
})


export default slice.reducer