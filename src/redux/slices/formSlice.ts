import { createSlice } from "@reduxjs/toolkit";

export interface IFormValues
{
    tourID: string;
    id1: string;
    id2: string;
}

const initialState: IFormValues = {
    tourID: "",
    id1: "",
    id2: "",
};

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateValue:(state, action) => {
            console.log(action.payload)
            state.tourID = action.payload;
        }
    }
});

export const {
    updateValue
} = formSlice.actions;

export default formSlice.reducer;
