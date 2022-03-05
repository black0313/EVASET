import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";

const slice = createSlice({
    name: 'firmalar',
    initialState: {
        firmalar: [],
        current:false
    },
    reducers: {
        getFrom: (state, action) => {
            state.firmalar = action.payload.object
        },
        savefrom: (state,action) => {
            // toast.success('Saqlandi')
            state.current=!state.current
        },
        editfrom: (state,action) => {
            state.current=!state.current

            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{
            state.current=!state.current

            // toast.info('O`chirildi')
        }

    }
});

export const getFirma=(data)=>apiCall({
    url: '/brand/by-businessId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveFirma=(data)=>apiCall({
    url: '/brand',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editFirma=(data)=>apiCall({
    url: '/brand/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteFirma=(data)=>apiCall({
    url: '/brand/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer