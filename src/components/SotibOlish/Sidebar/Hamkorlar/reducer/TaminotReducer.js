import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";
import {useEffect,useState} from "react";

const slice = createSlice({
    name: 'taminot',
    initialState: {
        taminot: [],
        current:false
    },
    reducers: {
        getFrom: (state, action) => {
            state.taminot = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            console.log('SAQLANDI_TAMINOT')
            state.current=!state.current
        },
        editfrom: (state,action) => {
            console.log('EDITED_TAMINOT');
            state.current=!state.current
        },
        deletefrom:(state,action)=>{
            console.log('DELETE_TAMINOT')
            state.current=!state.current
        }

    }
});

export const getTaminot=(data)=>apiCall({
    url: '/supplier/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});
export const getTaminot2=(data)=>apiCall({
    url: '/supplier/get-purchase-by-dealerId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveTaminot=(data)=>apiCall({
    url: '/supplier',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editTaminot=(data)=>apiCall({
    url: '/supplier/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteTaminot=(data)=>apiCall({
    url: '/supplier/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer