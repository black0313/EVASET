import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'savdo',
    initialState: {
        savdo: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.savdo = action.payload
            console.log(action.payload);
        },
        savefrom: (state,action) => {
            state.savdo.unshift(action.payload.object)
            state.savdo.unshift(action.payload.message)
            toast.success('Yangi savdo qo`shildi')
        },
        editfrom: (state,action) => {
            state.savdo.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            toast.success('Tahrirlandi')
        },
        deletefrom:(state,action)=>{
            toast.success('Savdo O`chirildi')
            // toast.info('O`chirildi')
        }

    }
});

export const getSavdo=(data)=>apiCall({
    url: '/trade/get-by-business/'+ data,
    method:'get',
    data,
    onSuccess: slice.actions.getFrom.type
});

export const saveSavdo=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editSavdo=(data)=>apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteSavdo=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer