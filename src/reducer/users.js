import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

export const slice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        id:'',
        token: {
            token_name: ''
        },
        businessId:"",
        authEnter:false,
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
        viewroleadmin:false,
        deleterole:false,

        addsupplier:false,
        editsupplier:false,
        viewsupplier:false,
        deletesupplier:false,
        viewsupplieradmin:false,

        addcustomer:false,
        editcustomer:false,
        viewcustomer:false,
        deletecustomer:false,
        viewcustomeradmin:false,

        addproduct:false,
        editproduct:false,
        viewproduct:false,
        deleteproduct:false,
        viewproductadmin:false,

    },
    reducers: {
        saveusers: (state, action) => {
                console.log(action.payload.success)
            if (action.payload.success){
                state.linkhome=!state.linkhome
                state.linkheader=!state.linkheader
                state.authEnter = true
                state.users = action.payload.object
                state.businessId=action.payload.object.business.id
                state.id = action.payload.object.id
                localStorage.setItem('tokenname',action.payload.message)
                console.log('ei')
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
                        case "VIEW_ROLE_ADMIN":;
                            state.viewroleadmin=true
                            break;
                        case "ADD_SUPPLIER":;
                            state.addsupplier=true
                            break;
                        case "EDIT_SUPPLIER":;
                            state.editsupplier=true
                            break;
                        case "VIEW_SUPPLIER":;
                            state.viewsupplier=true
                            break;
                        case "DELETE_SUPPLIER":;
                            state.deletesupplier=true
                            break;
                        case "VIEW_SUPPLIER_ADMIN":;
                            state.viewsupplieradmin=true
                            break;
                        case "ADD_CUSTOMER":;
                            state.addcustomer=true
                            break;
                        case "EDIT_CUSTOMER":;
                            state.editcustomer=true
                            break;
                        case "VIEW_CUSTOMER":;
                            state.viewcustomer=true
                            break;
                        case "DELETE_CUSTOMER":;
                            state.deletecustomer=true
                            break;
                        case "VIEW_CUSTOMER_ADMIN":;
                            state.viewcustomeradmin=true
                            break;
                        case "ADD_PRODUCT":;
                            state.addproduct=true
                            break;
                        case "EDIT_PRODUCT":;
                            state.editproduct=true
                            break;
                        case "VIEW_PRODUCT":;
                            state.viewproduct=true
                            break;
                        case "DELETE_PRODUCT":;
                            state.deleteproduct=true
                            break;
                        case "VIEW_PRODUCT_ADMIN":;
                            state.viewproductadmin=true
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
export const {changeerror,savdooynasi,saveusers} = slice.actions
export default slice.reducer
