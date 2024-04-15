import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./features/userSlice";

export const store = configureStore({
    reducer: {
        info: infoReducer,
    }
})