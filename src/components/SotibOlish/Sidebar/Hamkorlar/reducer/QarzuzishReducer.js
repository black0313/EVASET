import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../../../../../api";
import {toast} from "react-toastify";

const slice = createSlice({
    name: 'mijozgurux',
    initialState: {
        qarz: [],
        current:0
    },
    reducers: {
        getFrom: (state, action) => {
            state.qarz = action.payload.object
        },
        savefrom: (state,action) => {
            // state.qarz.unshift(action.payload)
            // state.current+=1
            toast.success('Qarz o`chdi !')
        },
    }
});

export const qarzuzishCustomer=(data)=>apiCall({
    url: '/customer/repayment/'+data,
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export default slice.reducer
