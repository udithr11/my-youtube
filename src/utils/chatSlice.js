import { createSlice } from "@reduxjs/toolkit";
import {OFFSET_CHAT} from '../utils/constants'

const chatSlice=createSlice({
    name: "chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>
        {
            state.messages.splice(OFFSET_CHAT,1);
            state.messages.unshift(action.payload);
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer; 