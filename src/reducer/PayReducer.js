import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

const slice = createSlice({
    name: 'paymethod',
    initialState: {
        paymethod: [],
        current:false
    },
    reducers: {
        getFrom: (state, action) => {
            state.paymethod = action.payload.object
            console.log(action.payload.object);
            console.log(action.payload)
            console.log("OLIB_KELINDI_MAXSULOT");
        },
        savefrom: (state,action) => {
            console.log(action.payload)
            state.current=!state.current
            console.log('SAQLANDI_MAXSULOT');
        },
        editfrom: (state,action) => {
            state.current=!state.current
        },
        deletefrom:(state,action)=>{
            console.log('DELETED_MAXSULOTLAR');
            state.current=!state.current

        }
    }
});

export const getPay=(data)=>apiCall({
    url: '/paymethod/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const savePay=(data)=>apiCall({
    url: '/product/get-by-barcode/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export default slice.reducer