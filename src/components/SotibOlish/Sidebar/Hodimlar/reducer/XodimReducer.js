import {createSlice, current} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xodimlar',
    initialState: {
        xodimlar: [],
        current:0
    },
    reducers: {
        getFrom: (state, action) => {
            state.xodimlar = action.payload.object
            console.log(action.payload.object);
            console.log('getdeltetishladi')
        },
        savefrom: (state, action) => {
            state.xodimlar.unshift(action.payload)
            console.log(action.payload)
            state.current=state.current+1
        },
        editfrom: (state, action) => {
            state.xodimlar.map((item, index) => {
                if (item.id === action.payload.id) {
                    item.login = action.payload.login
                }
            })
            state.current+=1
        },
        deletefrom: (state, action) => {
            console.log('ochirildi')
            console.log(action.payload.object.id)
            state.current+=1
        }
    }
});
export const getXodim = (data) => apiCall({
    url: '/user/get-by-business/'+data,
    method: 'get',
    data,
    onSuccess: slice.actions.getFrom.type
});

export const saveXodim = (data) => apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: slice.actions.savefrom.type,
});

export const editXodim = (data) => apiCall({
    url: '/user/'+data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.editfrom.type
});

export const deleteXodim = (data) => apiCall({
    url: '/user/'+data,
    method: 'delete',
    data,
    onSuccess: slice.actions.deletefrom.type
})

export default slice.reducer
