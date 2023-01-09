import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

export const slice=createSlice({
    name:'address',
    initialState:{
        address:[],
        current:false
    },
    reducers:{
        get:(state,action)=>{
            state.address=action.payload.object
        },
        save:(state,action)=>{
            state.current=!state.current
            toast.success('Address Added')
     },
        editfrom: (state,action) => {
            state.current=!state.current
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{
            state.current=!state.current
        }
    }
})

export const getaddress=()=>apiCall({
    url:'/address',
    method:'get',
    onSuccess:slice.actions.get.type
})

export const saveaddress=(data)=>apiCall({
    url:'/address',
    method:'post',
    data,
    onSuccess:slice.actions.save.type
})
//
// export const editbranchs=(data)=>apiCall({
//     url:'/branch/'+data.id,
//     method:'put',
//     data,
//     onSuccess:slice.actions.editfrom.type
// })
//
// export const deletebranchs=(data)=>apiCall({
//     url:'/branch/'+data,
//     method:'delete',
//     data,
//     onSuccess:slice.actions.deletefrom.type
// })

export default slice.reducer
