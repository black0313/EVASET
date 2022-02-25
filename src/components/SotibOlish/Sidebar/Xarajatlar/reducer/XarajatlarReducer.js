import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";

const slice = createSlice({
    name: 'xarajatlar',
    initialState: {
        xarajatlar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.xarajatlar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.xarajatlar.unshift(action.payload)
        },
        editfrom: (state,action) => {
            state.xarajatlar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            console.log('saqlandi_xarajat');
        },
        deletefrom:(state,action)=>{

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

export const saveXarajatlar=(data)=>apiCall({
    url: '/outlay',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editXarajatlar=(data)=>apiCall({
    url: '/outlay',
    method: 'post',
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