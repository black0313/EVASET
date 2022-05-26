import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../../api";
import {toast} from "react-toastify";


const slice = createSlice({
    name: 'soliq',
    initialState: {
        soliq: [],
        current :0,

    },
    reducers: {
        getFrom: (state, action) => {
            state.soliq = action.payload.object
        },
        savefrom: (state,action) => {
            state.soliq.unshift(action.payload)
            state.current+=1
            toast.success('Soliq qo`shildi')
        },
        editfrom: (state,action) => {
            state.current+=1
            toast.success('Soliq tahrirlandi')
        },
        deletefrom:(state,action)=>{
            state.current+=1
            toast.success('Soliq o`chirildi')
        }
    }
});

export const getSoliq=(data)=>apiCall({
    url: '/tax/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveSoliq=(data)=>apiCall({
    url: '/tax',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editSoliq=(data)=>apiCall({
    url: '/tax/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteSoliq=(data)=>apiCall({
    url: '/tax/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer