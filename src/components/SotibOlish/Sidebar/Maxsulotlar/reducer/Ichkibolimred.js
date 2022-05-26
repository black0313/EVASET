import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'ichkibolim',
    initialState: {
        ichkibolim: [],
        current:0
    },
    reducers: {
        getFrom: (state, action) => {
            state.ichkibolim = action.payload.object
        },
        savefrom: (state,action) => {
            state.ichkibolim.unshift(action.payload)
            state.current+=1
            toast.success("Ichki bo'lim qo'shildi")
        },
        editfrom: (state,action) => {
            state.current+=1
            toast.success("Ichki bo'lim tahrirlandi")
        },
        deletefrom:(state,action)=>{
            state.current+=1
            toast.success("Ichki bo'lim o`chirildi")
        }

    }
});

export const getichki=(data)=>apiCall({
    url: '/category/get-child-category/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveichkibolim=(data)=>apiCall({
    url: '/category/addChildCategory',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const deleteichkibolim=(data)=>apiCall({
    url: '/category/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer