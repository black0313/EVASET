import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xaridlar',
    initialState: {
        xaridlar: [],
        current:false
    },
    reducers: {
        getFrom: (state, action) => {
            state.xaridlar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.current=!state.current
        },
        editfrom: (state,action) => {
            state.current=!state.current
        },
        deletefrom:(state,action)=>{
            state.current=!state.current
            console.log('Deleted_XArid');
        }
    }
});

export const getXarid=(data)=>apiCall({
    url: '/purchase/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getXarid2=(data)=>apiCall({
    url: '/purchase/get-purchase-by-branch/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getXarid4=(data)=>apiCall({
    url: 'purchase/get-purchase-by-purchaseStatus/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});
export const getXarid3=(data)=>apiCall({
    url: '/purchase/get-purchase-by-dealerId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveXarid=(data)=>apiCall({
    url: '/purchase',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editXarid=(data)=>apiCall({
    url: '/purchase',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteXarid=(data)=>apiCall({
    url: '/purchase/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer