import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'photo',
    initialState: {
        photo: [],
        current:false
    },
    reducers: {
        getFrom: (state, action) => {
            state.photo = action.payload
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

export const getphoto=()=>apiCall({
    url: '/attachment/download/'+2,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const savephoto=(data)=>apiCall({
    url: '/attachment/upload',
    method:'post',
    data:data,
    onSuccess: slice.actions.savefrom.type
});

export default slice.reducer