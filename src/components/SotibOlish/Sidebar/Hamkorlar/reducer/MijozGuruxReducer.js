import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'mijozgurux',
    initialState: {
        mijozgurux: [],
        current:0
    },
    reducers: {
        getFrom: (state, action) => {
            console.log("lpo")
            state.mijozgurux = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.mijozgurux.unshift(action.payload)
            state.current+=1
            // toast.success('Saqlandi')
        },
        editfrom: (state,action) => {

            state.current+=1
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{
            console.log('DELETED_MIJOZ')
            state.current+=1
        }
    }
});

export const getMijozGurux=()=>apiCall({
    url: 'customer/get-by-businessId/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveMijozGurux=(data)=>apiCall({
    url: '/customer',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editMijozGurux=(data)=>apiCall({
    url: '/customer/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteMijozGurux=(data)=>apiCall({
    url: '/customer/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.typex
})

export default slice.reducer
