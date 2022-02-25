import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";

const slice = createSlice({
    name: 'savdolar',
    initialState: {
        savdolar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.savdolar = action.payload
            console.log(action.payload);
        },
        savefrom: (state,action) => {
            state.savdolar.unshift(action.payload.object)
            // state.savdolar.unshift(action.payload.message)
            console.log('SAVED_SAVDOLAR');
            // toast.success('Saqlandi')
        },
        editfrom: (state,action) => {
            state.savdolar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{

            console.log('DELETED_SAVDOLAR');
            // toast.info('O`chirildi')
        }

    }
});

export const getSavdolar=()=>apiCall({
    url: '/trade/get-by-business/1',
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
    url: '/trade',
    method: 'post',
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