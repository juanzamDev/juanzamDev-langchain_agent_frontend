import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    agents: [],
    message: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginInfo: (state, action) => {
            // state.user = action.payload;
            const {username, agents, message} = action.payload;
            state.username = username;
            state.agents = agents;
            state.message = message
        },
    },
})

export const { loginInfo } = userSlice.actions

export default userSlice.reducer