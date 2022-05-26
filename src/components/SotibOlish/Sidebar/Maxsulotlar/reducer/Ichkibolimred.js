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
            toast.success("Ichki bo'lim qo'shildi")
            state.current+=1
        },
        editfrom: (state,action) => {
            state.current+=1
        },
        deletefrom:(state,action)=>{
            state.current+=1
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


export default slice.reducer