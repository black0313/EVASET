import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'otkazmalar',
    initialState: {
        otkazmalar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.otkazmalar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.otkazmalar.unshift(action.payload)
            console.log('SAVED_OTKAZMA');
        },
        editfrom: (state,action) => {
            state.otkazmalar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
        },
        deletefrom:(state,action)=>{
            console.log('DELETED_OTKAZMA');
        }
    }
});

export const getOtkazma=()=>apiCall({
    url: '/exchange-product-branch/get-by-shipped-branch/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveOtkazma=(data)=>apiCall({
    url: '/exchange-product-branch',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editOtkazma=(data)=>apiCall({
    url: '/exchange-product-branch',
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteOtkazma=(data)=>apiCall({
    url: '/exchange-product-branch/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer