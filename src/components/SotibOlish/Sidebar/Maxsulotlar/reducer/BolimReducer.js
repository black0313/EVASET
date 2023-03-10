import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'bolimlar',
    initialState: {
        bolimlar: [],
        current :false
    },
    reducers: {
        getFrom: (state, action) => {
            state.bolimlar = action.payload.object
        },
        savefrom: (state,action) => {
            state.bolimlar.unshift(action.payload)
            state.current=!state.current
            toast.success('Bo`lim qo`shildi')
        },
        editfrom: (state,action) => {
            state.current=!state.current
            toast.success('Bo`lim tahrirlandi')
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{
            state.current=!state.current
            toast.success('Bo`lim o`chirildi')
        }
    }
});

export const getBolim=(data)=>apiCall({
    url: '/category/get-by-businessId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveBolim=(data)=>apiCall({
    url: '/category',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editBolim=(data)=>apiCall({
    url: '/category/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteBolim=(data)=>apiCall({
    url: '/category/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer