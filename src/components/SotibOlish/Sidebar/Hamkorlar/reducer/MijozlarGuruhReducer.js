import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'mijozgurux',
    initialState: {
        mijozlarguruhlari: [],
        current:0
    },
    reducers: {
        getFrom: (state, action) => {
            console.log("lpo")
            state.mijozlarguruhlari = action.payload.object
        },
        savefrom: (state,action) => {
            state.mijozlarguruhlari.unshift(action.payload)
            state.current+=1
            toast.success('Guruh qo`shildi !')
        },
        editfrom: (state,action) => {
            state.current+=1
            toast.success('Guruh tahrirlandi !')
        },
        deletefrom:(state,action)=>{
            toast.success('Guruh o`chirildi!')
            state.current+=1
        }
    }
});

export const getMijozLarGuruh=()=>apiCall({
    url: 'customer/get-by-businessId/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveMijozLarGurux=(data)=>apiCall({
    url: '/customer',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editMijozLarGurux=(data)=>apiCall({
    url: '/customer/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteMijozLarGuruh=(data)=>apiCall({
    url: '/customer/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer
