import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'maxsulotlar',
    initialState: {
        maxsulotlar: [],
        current:false
    },
    reducers: {
        getFrom: (state, action) => {
            state.maxsulotlar = action.payload.object
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

export const getMaxsulotRuyxati=(data)=>apiCall({
    url: '/product/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getMaxsulotRuyxati2=(data)=>apiCall({
    url: '/product/get-by-barcode/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getMaxsulotRuyxati3=(data)=>apiCall({
    url: '/product/get-by-brand/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});
export const getMaxsulotRuyxatiBOLIM=(data)=>apiCall({
    url: '/product/get-by-category/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getMaxsulotRuyxatiMeasure=(data)=>apiCall({
    url: '/product/get-by-measurement/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getCategory=()=>apiCall({
    url: '/get-by-category/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveMaxsulotRuyxati=(data)=>apiCall({
    url: '/product',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editMaxsulotRuyxati=(data)=>apiCall({
    url: '/product/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteMaxsulotRuyxati=(data)=>apiCall({
    url: '/product/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer