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
            toast.success('Qarz o`chdi !')
        },
    }
});

export const qarzuzishTaminot=(data)=>apiCall({
    url: '/supplier/repayment/'+data.id,
    method:'post',
    data,
    onSuccess: slice.actions.savefrom.type
});

export default slice.reducer
