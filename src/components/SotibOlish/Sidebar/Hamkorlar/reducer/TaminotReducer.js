import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";
import {useEffect,useState} from "react";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'taminot',
    initialState: {
        taminot: [],
        current:false,
        taminotjami:0,
        miqdor:0,
        uzcard:0,
        naqd:0,
        humo:0
    },
    reducers: {
        getFrom: (state, action) => {
            state.taminot = action.payload.object
            let amount=0
            let uzcard=0
            let naqd=0
            let humo=0
            let miqdor=0

            // action.payload.object.map(item=>{
            //         amount+=item.storeDebt
            //         console.log(item.storeDebt)
            //         item.map(item=>{
            //             miqdor+=item.storeDebt
            //         })
            //     },
            // )

            state.taminotjami=amount
            state.miqdor=miqdor
            state.uzcard=uzcard
            state.humo=humo
            state.naqd=naqd
        },
        savefrom: (state,action) => {
            toast.success('Diller saqlandi!')
            state.current=!state.current
        },
        editfrom: (state,action) => {
            toast.success('Diller tahrirlandi')
            state.current=!state.current
        },
        deletefrom:(state,action)=>{
            toast.success('Diller o`chirildi!')
            state.current=!state.current
        }
    }
});

export const getTaminot=(data)=>apiCall({
    url: '/supplier/get-by-business/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});
export const getTaminot2=(data)=>apiCall({
    url: '/supplier/get-purchase-by-dealerId/'+data,
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveTaminot=(data)=>apiCall({
    url: '/supplier',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editTaminot=(data)=>apiCall({
    url: '/supplier/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteTaminot=(data)=>apiCall({
    url: '/supplier/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer