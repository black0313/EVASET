import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

export const slice=createSlice({
    name:'branch',
    initialState:{
        branch:[],
        branches:[],
        current:false
    },
    reducers:{
        get:(state,action)=>{
                state.branch=action.payload.object
                let a = action.payload.object.map(({
                                                      name:label,
                                                      id: value,...rest
                                                  }) =>({label,value,...rest}));
            state.branches =a

        },
        save:(state,action)=>{
            state.current=!state.current
            toast.success('Yangi filial qo`shildi')
        },
        editfrom: (state,action) => {
            state.current=!state.current
            toast.success('Filial tahrirlandi')
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{
            state.current=!state.current
            toast.success('Filial o`chirildi')
        }
    }
})

export const getbranch=(data)=>apiCall({
    url:'/branch/get-all-by-business-id/'+data,
    method:'get',
    data,
    onSuccess:slice.actions.get.type
})

export const savebranch=(data)=>apiCall({
    url:'/branch',
    method:'post',
    data,
    onSuccess:slice.actions.save.type
})

export const editbranchs=(data)=>apiCall({
    url:'/branch/'+data.id,
    method:'put',
    data,
    onSuccess:slice.actions.editfrom.type
})

export const deletebranchs=(data)=>apiCall({
    url:'/branch/'+data,
    method:'delete',
    data,
    onSuccess:slice.actions.deletefrom.type
})

export default slice.reducer