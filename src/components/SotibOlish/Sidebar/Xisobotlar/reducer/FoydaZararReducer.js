import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
// import {toast} from "react-toastify";

const slice = createSlice({
    name: 'foydazarar',
    initialState: {
        foydazarar: []
    },
    reducers: {
        getFrom: (state, action) => {
            state.foydazarar = action.payload.object
            console.log(action.payload.object);
            console.log('keldi_foyda');
        },
        savefrom: (state,action) => {
                    console.log(action.payload)
            // toast.success('Saqlandi')
            console.log("SAQLANDI_FOYDA");
        },
        editfrom: (state,action) => {
            state.foydazarar.map((item,index)=>{
                if (item.id === action.payload.id){
                    item.login = action.payload.login
                }
            })
            // toast.success('O`zgartirildi')
        },
        deletefrom:(state,action)=>{
            console.log("DELETETD_FOYDA");
            // toast.info('O`chirildi')
        }

    }
});

export const getFoydaZarar=()=>apiCall({
    url: '/benefit-lost/one-date',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export const saveFoydaZarar=(data)=>apiCall({
    url: '/benefit-lost',
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export const editFoydaZarar=(data)=>apiCall({
    url: '/benefit-lost',
    method: 'post',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteFoydaZarar=(data)=>apiCall({
    url: '/benefit-lost/'+data,
    method:'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer