import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'maxsulotlar',
    initialState: {
        maxsulotlar: [],
        current:false,
    },
    reducers: {
        getFrom: (state, action) => {
                console.log(action.payload)
            if(action.payload.success===true){
                state.maxsulotlar = action.payload.object
            }
            else{
                state.maxsulotlar = []
            }
        },
        savefrom: (state,action) => {
            state.current=!state.current
            toast.success('Mahsulot qo`shildi')
        },
        editfrom: (state,action) => {
            state.current=!state.current
            toast.success('Mahsulot tahrirlandi')
        },
        deletefrom:(state,action)=>{
            state.current=!state.current
            toast.success('Mahsulot o`chirildi')
        },
        deletefromByIds:(state,action)=>{
            state.current=!state.current
            toast.success('Tanlangan mahsulotlar o`chirildi')
        }
    }
});

export const getMaxsulotRuyxati=(data)=>apiCall({
    url: '/product/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type,
    onFail: slice.actions.getFrom.type

});
export const getMaxsulotRuyxati2=(data)=>apiCall({
    url: '/product/get-by-barcode/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type,
    onFail: slice.actions.getFrom.type

});

export const getMaxsulotRuyxati3=(data)=>apiCall({
    url: '/product/get-by-brand/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type,
    onFail: slice.actions.getFrom.type

});
export const getMaxsulotRuyxatiBOLIM=(data)=>apiCall({
    url: '/product/get-by-category/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type,
    onFail: slice.actions.getFrom.type

});

export const getMaxsulotRuyxatiMeasure=(data)=>apiCall({
    url: '/product/get-by-measurement/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type,
    onFail: slice.actions.getFrom.type

});

export const getMaxsulotRuyxatibranch=(data)=>apiCall({
    url: '/product/get-by-branch/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type,
    onFail: slice.actions.getFrom.type

});

export const getCategory=()=>apiCall({
    url: '/get-by-category/1',
    method:'get',
    onSuccess: slice.actions.getFrom.type,
    onFail: slice.actions.getFrom.type

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
export const deleteMaxsulotRuyxatiByIds=(data)=>apiCall({
    url: '/product/delete-few',
    method:'delete',
    data,
    onSuccess: slice.actions.deletefromByIds.type
})

export default slice.reducer
