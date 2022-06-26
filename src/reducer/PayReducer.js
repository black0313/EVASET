import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'paymethod',
    initialState: {
        paymethod: [],
        paymethod2:{},
        current:false,

    },
    reducers: {
        getFrom: (state, action) => {
            state.paymethod = action.payload.object
        },
        getFrom2: (state, action) => {
            state.paymethod2 = action.payload.object
        },
        savefrom: (state,action) => {
            state.current=!state.current
            toast.success('Saqlandi')
        },
        editfrom: (state,action) => {
            state.current=!state.current
            toast.success('Tahrirlandi')
        },
        deletefrom:(state,action)=>{
            state.current=!state.current
            toast.success('Ruyhatdan o`chirildi')
        }
    }
});

export const getPay=(data)=>apiCall({
    url: '/paymethod/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getPay2=(data)=>apiCall({
    url: '/paymethod/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom2.type
});

export const savePay=(data)=>apiCall({
    url: '/product/get-by-barcode/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export default slice.reducer