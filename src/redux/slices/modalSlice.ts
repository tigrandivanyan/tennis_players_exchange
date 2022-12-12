import { createSlice } from "@reduxjs/toolkit";

export interface IModalValues
{
    shown: boolean,
    data: object,
    type: string
}

const initialState: IModalValues = {
    shown:false,
    data:{},
    type:''
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal:(state, action) => {
            console.log(action.payload)
            state.shown = true;
            state.data = action.payload.data || initialState.data;
            state.type = action.payload.type || initialState.type;
        },
        closeModal:(state, action) => {
            state.shown = false;
            state.data = initialState.data;
            state.type = initialState.type;
        }
    }
});

export const {
    openModal,
    closeModal
} = modalSlice.actions;

export default modalSlice.reducer;
