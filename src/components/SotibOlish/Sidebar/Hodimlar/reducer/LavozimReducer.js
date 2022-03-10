import {createSlice, current} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'lavozimlar',
    initialState: {
        lavozimlar: [],
        current:0
    },
    reducers: {
        getFrom: (state, action) => {
            state.lavozimlar = action.payload.object
            console.log(action.payload.object);
        },
        savefrom: (state,action) => {
            toast.success('Lavozim qo`shildi')
            state.current=0
        },
        editfrom: (state,action) => {
            state.lavozimlar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            state.current=0
            toast.success('Lavozim tahrirlandi')
        },
        deletefrom:(state,action)=>{
            console.log(typeof action.payload)
            state.current-=1
            toast.success('Lavozim o`chirildi')
        }
    }
});

export const getLavozim=(data)=>apiCall({
    url: '/role/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveLavozim=(data)=>apiCall({
    url: '/role',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editLavozim=(data)=>apiCall({
    url: '/role/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteLavozim=(data)=>apiCall({
    url: '/role/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer