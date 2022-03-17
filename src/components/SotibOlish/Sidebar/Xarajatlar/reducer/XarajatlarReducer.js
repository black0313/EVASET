import {createSlice, current} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xarajatlar',
    initialState: {
        xarajatlar: [],
        counter:false,
    },
    reducers: {
        getFrom: (state, action) => {
            state.xarajatlar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.xarajatlar.unshift(action.payload)
            state.counter=!state.counter
            toast.success('Xarajat qo`shildi')
        },
        editfrom: (state,action) => {
            state.counter=!state.counter
            toast.success('Tahrirlandi')
        },
        deletefrom:(state,action)=>{
            state.counter=!state.counter
            toast.success('Ruyhatdan o`chirildi')
        }
    }
});

export const getXarajatlar=(data)=>apiCall({
    url: '/outlay/get-by-businessId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});
export const getXarajatlar2=(data)=>apiCall({
    url: '/outlay/get-by-branchId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});
export const getXarajatlar3=(data)=>apiCall({
    url: '/outlay/get-by-date/'+data.date+'/'+data.id,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveXarajatlar=(data)=>apiCall({
    url: '/outlay',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editXarajatlar=(data)=>apiCall({
    url: '/outlay/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteXarajatlar=(data)=>apiCall({
    url: '/outlay/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer