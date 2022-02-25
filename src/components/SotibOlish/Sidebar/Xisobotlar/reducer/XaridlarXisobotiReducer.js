import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xaridxisobot',
    initialState: {
        xaridxisobot: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.xaridxisobot = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            state.xaridxisobot.unshift(action.payload)
            // toast.success('Saqlandi')
        },
        editfrom: (state,action) => {
            state.xaridxisobot.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{
            // toast.info('O`chirildi')
        }
    }
});

export const getXaridXisobot=()=>apiCall({
    url: '/purchase/get-by-business/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveXaridXisobot=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editXaridXisobot=(data)=>apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteXaridXisobot=(data)=>apiCall({
    url: '/user',
    method:'post',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer