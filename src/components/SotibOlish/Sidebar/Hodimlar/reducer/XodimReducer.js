import {createSlice, current} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'xodimlar',
    initialState: {
        xodimlar: [],
        oneXodim:{},
        current:true
    },
    reducers: {
        getFrom: (state, action) => {
            state.xodimlar = action.payload.object
        },
        getFromID: (state, action) => {
            state.oneXodim = action.payload.object
            console.log('1')
            state.current=!state.current
        },
        savefrom: (state, action) => {
            state.xodimlar.unshift(action.payload)
            toast.success('Xodim saqlandi')
            state.current=!state.current
        },
        editfrom: (state, action) => {
            state.xodimlar.map((item, index) => {
                if (item.id === action.payload.id) {
                    item.login = action.payload.login
                }
            })
            toast.success('Xodim tahrirlandi')
            state.current=!state.current
        },
        deletefrom: (state, action) => {
            toast.success('Xodim o`chirildi')
            state.current=!state.current
        }
    }
});
export const getXodim = (data) => apiCall({
    url: '/user/get-by-business/'+data,
    method: 'get',
    data,
    onSuccess: slice.actions.getFrom.type
});
export const getXodimID = (data) => apiCall({
    url: '/user/'+data,
    method: 'get',
    data,
    onSuccess: slice.actions.getFromID.type
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
