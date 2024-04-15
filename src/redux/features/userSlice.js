import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "",
}

export const userSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        getInfo: (state, action) => {
            state.user = action.payload;
        },
    },
})

export const { getInfo } = userSlice.actions

export default userSlice.reducer