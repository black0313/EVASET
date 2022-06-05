import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'mijozGuruh',
    initialState: {
        mijozGuruh: [],
        current:0
    },
    reducers: {
        getFrom: (state, action) => {
            console.log(action.payload)
            state.mijozGuruh = action.payload
        },
        savefrom: (state,action) => {
            state.mijozGuruh.unshift(action.payload)
            state.current+=1
            toast.success('Mijoz Guruhi qo`shildi !')
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
    url: '/customerGroup/get',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveMijozLarGurux=(data)=>apiCall({
    url: '/customerGroup',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editMijozLarGurux=(data)=>apiCall({
    url: '/customerGroup/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteMijozLarGuruh=(data)=>apiCall({
    url: '/customerGroup/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer
