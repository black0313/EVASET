import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";

const slice = createSlice({
    name: 'exchangestatus',
    initialState: {
        exchangestatus:[],
    },
    reducers: {
        getFrom: (state, action) => {
            state.exchangestatus = action.payload.object
            console.log(action.payload.object);
        },
    }
});


export const getOtkazmaStatus=()=>apiCall({
    url: '/exchange/status/getAllStatus',
    method:'get',
    onSuccess: slice.actions.getFrom.type
});

export default slice.reducer