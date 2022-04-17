import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xaridlar',
    initialState: {
        xaridlar: [],
        current:false,
        xaridlarjami:0,
        miqdor:0,
        uzcard:0,
        naqd:0,
        humo:0,
    },
    reducers: {
        getFrom: (state, action) => {
            state.xaridlar = action.payload.object
            let amount=0
            let uzcard=0
            let naqd=0
            let humo=0
            let miqdor=0
            action.payload.object.map(item=>{
                    amount+=item.totalSum
                // console.log(item.purchaseProductList[0].purchasedQuantity)
                item.purchaseProductList.map(item=>{
                    miqdor+=item.purchasedQuantity
                })

                // if (item.payMethod.id===2){
                //     uzcard+=item.totalSum
                // }
                // else if(item.payMethod.id===1){
                //     naqd+=item.totalSum
                // }
                // else if(item.payMethod.id===3){
                //     humo+=item.totalSum
                // }
                },
            )
            state.xaridlarjami=amount
            state.miqdor=miqdor
            state.uzcard=uzcard
            state.humo=humo
            state.naqd=naqd
        },
        savefrom: (state,action) => {
            state.current=!state.current
            toast.success('Xarid qilindi !')
        },
        editfrom: (state,action) => {
            state.current=!state.current
            toast.success('Xarid taxrirlandi !')

        },
        deletefrom:(state,action)=>{
            state.current=!state.current
            console.log('Deleted_XArid');
        }
    }
});

export const getXarid=(data)=>apiCall({
    url: '/purchase/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getXarid5=(data)=>apiCall({
    url: '/purchase/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getXarid2=(data)=>apiCall({
    url: '/purchase/get-purchase-by-branch/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const getXarid4=(data)=>apiCall({
    url: 'purchase/get-purchase-by-purchaseStatus/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});
export const getXarid3=(data)=>apiCall({
    url: '/purchase/get-purchase-by-dealerId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveXarid=(data)=>apiCall({
    url: '/purchase',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editXarid=(data)=>apiCall({
    url: '/purchase/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteXarid=(data)=>apiCall({
    url: '/purchase/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer