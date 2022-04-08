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
        linksavdooynasi:false,
        error:false,
        rememberme:false,
        adduser:false,
        edituser:false,
        viewuser:false,
        viewuseradmin:false,
        deleteuser:false,
        addrole:false,
        editrole:false,
        viewrole:false,
        deleterole:false
    },
    reducers: {
        save: (state, action) => {

            if (action.payload.success===true){
                state.linkhome=!state.linkhome
                state.linkheader=!state.linkheader
                state.users = action.payload.object
                state.businessId=action.payload.object.business.id
                localStorage.setItem('tokenname',action.payload.message)

                    state.users.role.permissions.map(item=>{
                    switch (item){
                        case "ADD_USER":;
                            state.adduser=true
                            break;
                        case "EDIT_USER":;
                            state.edituser=true
                            break;
                        case "VIEW_USER":;
                            state.viewuser=true
                            break;
                        case "DELETE_USER":;
                            state.deleteuser=true
                            break;
                        case "VIEW_USER_ADMIN":;
                            state.viewuser=true
                            break;
                        case "ADD_ROLE":;
                            state.addrole=true
                            break;
                        case "EDIT_ROLE":;
                            state.editrole=true
                            break;
                        case "VIEW_ROLE":;
                            state.viewrole=true
                            break;
                        case "DELETE_ROLE":;
                            state.deleterole=true
                            break;

                    }
                })
            }
            else{
                state.error=true
                toast.info('parol yoki login xato')

            }

        },
        get: (state, action) => {
            state.users = action.payload
            console.log(state.users)
        },
        changeerror:(state,action)=>{
            state.error=false
        },
        savdooynasi:(state,action)=>{
            state.linkheader=!state.linkheader
            state.linksavdooynasi=!state.linksavdooynasi
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

export const {changeerror,savdooynasi} = slice.actions
export default slice.reducer
