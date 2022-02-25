import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xaridlar',
    initialState: {
        xaridlar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.xaridlar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.xaridlar.unshift(action.payload)
            // toast.success('Saqlandi')
            console.log('SAQLADNI_XARID');
        },
        editfrom: (state,action) => {
            state.xaridlar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{
            // toast.info('O`chirildi')
            console.log('Deleted_XArid');
        }

    }
});

export const getXarid=(data)=>apiCall({
    url: '/purchase/get-by-business/'+data,
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