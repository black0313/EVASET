import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";

const slice = createSlice({
    name: 'xarajatlar',
    initialState: {
        xarajatlar: [],
        counter:false
    },
    reducers: {
        getFrom: (state, action) => {
            state.xarajatlar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.xarajatlar.unshift(action.payload)
            state.counter=!state.counter
        },
        editfrom: (state,action) => {
            state.counter=!state.counter

            console.log('saqlandi_xarajat');
        },
        deletefrom:(state,action)=>{
            state.counter=!state.counter

            console.log('DELETEED_XARAJAT');
            // toast.info('O`chirildi')
        }
    }
});

export const getXarajatlar=()=>apiCall({
    url: '/outlay/get-by-businessId/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});
export const getXarajatlar2=(data)=>apiCall({
    url: '/outlay/get-by-branchId/'+data,
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