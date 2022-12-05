import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";

export const store = configureStore({
    reducer: {
        form: formReducer,
    }
});

export const storeDispatch = store.dispatch;
export const getStoreState = store.getState;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
