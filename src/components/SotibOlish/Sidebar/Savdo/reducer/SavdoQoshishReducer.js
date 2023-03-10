import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'savdolar',
    initialState: {
        savdolar: [],
        amount:0,
    },
    reducers: {
        getFrom: (state, action) => {
            state.savdolar = action.payload.object

        },
        savefrom: (state,action) => {
            state.savdolar.unshift(action.payload.object)
            // toast.success('Savdo qo`shildi')
        },
        editfrom: (state,action) => {
            state.savdolar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            toast.success('Savdo tahrirlandi')
        },
        deletefrom:(state,action)=>{
            // toast.info('Savdo ucdi')
        }

    }
});

export const getSavdolar=(data)=>apiCall({
    url: '/trade/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getSavdolar2 =(data)=>apiCall({
    url: 'trade/get-by-branchId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getSavdolar3 =(data)=>apiCall({
    url: 'trade/get-by-PayDate/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveSavdolar=(data)=>apiCall({
    url: '/trade',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editSavdolar=(data)=>apiCall({
    url: '/trade/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteSavdolar=(data)=>apiCall({
    url: '/trade/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer
