import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'mijozgurux',
    initialState: {
        mijozgurux: [],
        current:0
    },
    reducers: {
        getFrom: (state, action) => {
            state.mijozgurux = action.payload.object
        },
        savefrom: (state,action) => {
            state.mijozgurux.unshift(action.payload)
            state.current+=1
            toast.success('Mijoz qo`shildi !')
        },
        savefrom2: (state,action) => {
            state.mijozgurux.unshift(action.payload)
            state.current+=1
            toast.success('Mijjoz qo`shildi !')
        },
        editfrom: (state,action) => {
            state.current+=1
            toast.success('Mijoz tahrirlandi !')
        },
        deletefrom:(state,action)=>{
            toast.success('Mijoz o`chirildi!')
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
    onSuccess: slice.actions.deletefrom.type
});

export const qarzuzishCustomer=(data)=>apiCall({
    url: '/customer/repayment/'+data.id,
    method:'post',
    data,
    onSuccess: slice.actions.savefrom2.type
});

export default slice.reducer
