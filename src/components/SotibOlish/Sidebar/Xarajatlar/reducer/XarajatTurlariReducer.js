import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xarajatturlari',
    initialState: {
        xarajatturlari: [],
        counter:false
    },
    reducers: {
        getFrom: (state, action) => {
            state.xarajatturlari = action.payload.object
            console.log(action.payload);
        },
        savefrom: (state,action) => {
            state.xarajatturlari.unshift(action.payload)
            toast.success('Saqlandi')
            state.counter=!state.counter
        },
        editfrom: (state,action) => {
            state.xarajatturlari.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            toast.success('Tahrirlandi')
            state.counter=!state.counter

        },
        deletefrom:(state,action)=>{
            toast.success('Ruyhatdan o`chirildi')
            state.counter=!state.counter
        }
    }
});

export const getXarajatlarTurlari=(data)=>apiCall({
    url: '/outlayCategory/get-by-businessId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveXarajatlarTurlari=(data)=>apiCall({
    url: '/outlayCategory',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editXarajatlarTurlari=(data)=>apiCall({
    url: '/outlayCategory',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteXarajatlarTurlari=(data)=>apiCall({
    url: '/outlayCategory/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer