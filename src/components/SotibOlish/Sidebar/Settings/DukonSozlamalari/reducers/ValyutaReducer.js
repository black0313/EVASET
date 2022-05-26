import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../../api";
import {toast} from "react-toastify";


const slice = createSlice({
    name: 'valyuta',
    initialState: {
        valyuta: [],
        current :0
    },
    reducers: {
        getFrom: (state, action) => {
            state.valyuta = action.payload.object
        },
        savefrom: (state,action) => {
            state.valyuta.unshift(action.payload)
            state.current+=1
            toast.success('Valyuta qo`shildi')
        },
        editfrom: (state,action) => {
            state.current+=1
            toast.success('Valyuta tahrirlandi')
        },
        deletefrom:(state,action)=>{
            state.current+=1
            toast.success('Soliq o`chirildi')
        }
    }
});

export const getValyuta=(data)=>apiCall({
    url: '/currency/get-by-businessId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveValyuta=(data)=>apiCall({
    url: '/currency',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editValyuta=(data)=>apiCall({
    url: '/currency/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteValyuta=(data)=>apiCall({
    url: '/currency/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer