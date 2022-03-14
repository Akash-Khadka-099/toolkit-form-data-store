import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
    name : "Form",
    initialState : {
        data : []
    },
    reducers : {
        datas : (state, action) =>{
            state.data = {...state.data, ...action.payload}
        }
    }
})

export const { datas } = FormSlice.actions;
export default FormSlice.reducer