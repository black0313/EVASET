import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

export const slice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        token: {
            token_name: ''
        },
        businessId:'',
        linkhome:true,
        linkheader:false,
        error:false,
        rememberme:false,
    },
    reducers: {
        save: (state, action) => {
            if (action.payload.success===true){
                state.linkhome=!state.linkhome
                state.linkheader=!state.linkheader
                state.users = action.payload.object
                state.businessId=action.payload.object.business.id
                localStorage.setItem('tokenname',action.payload.message)
                console.log(state.payload)

                console.log(state.linkhome)
                console.log(state.linkheader)
            }
            else{
                state.error=true
                console.log('herh')
                toast.info('parol yoki login xato')
                console.log('oeje')
            }

        },
        get: (state, action) => {
            state.users = action.payload
            console.log(state.users)
        },
        changeerror:(state,action)=>{
            state.error=false
        }
    }
})

export const saveusers=(data) => apiCall({
    url: '/auth/login',
    method: 'post',
    data,
    onSuccess: slice.actions.save.type,
    onFail: slice.actions.save.type
})

export const  getusers = () => apiCall({
    url: '/auth/login',
    method: 'get',
    onSuccess: slice.actions.get.type
})

export const {changeerror} = slice.actions
export default slice.reducer
