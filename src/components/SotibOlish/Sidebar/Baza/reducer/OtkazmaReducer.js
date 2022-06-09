import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'otkazmalar',
    initialState: {
        otkazmalar: [],
                                counter:false
    },
    reducers: {
        getFrom: (state, action) => {
            state.otkazmalar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.otkazmalar.unshift(action.payload)
            toast.success('Otkazma saqlandi')
            state.counter=!state.counter
        },
        editfrom: (state,action) => {
            state.otkazmalar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            toast.success('Otkazma tahrirlandi')
            state.counter=!state.counter

        },
        deletefrom:(state,action)=>{
            toast.success('Otkazma o`chirildi')
            state.counter=!state.counter

        }
    }
});

export const getOtkazma=(data)=>apiCall({
    url: '/exchange-product-branch/get-by-businessId/'+data,
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