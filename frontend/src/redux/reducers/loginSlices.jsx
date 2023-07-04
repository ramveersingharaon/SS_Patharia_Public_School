import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: { loading: false, isAuthentication: false },
    reducers: {
        login_loading(state, action) {
            state.loading = true
        },
        login_success(state, action) {
            state.loading = false;
            state.isAuthentication = true;
            state.message = action.payload.message
        },
        login_fail(state, action) {
            state.loading = false;
            state.error = action.payload

        },
        getCurrentUser_loading(state, action) {
            state.loading = true;
            state.isAuthentication = false;
        },
        getCurrentUser_success(state, action) {
            state.loading = false;
            state.isAuthentication = true;
            state.user = action.payload.user;
        },

        getCurrentUser_fail(state, action) {
            state.loading = false;
            state.error = action.payload
            state.isAuthentication = false;
        },
        clearMessage(state) {
            state.message = null
        },
        clearError(state) {
            state.error = null
        }


    },

})

export const { login_loading, login_success, login_fail, getCurrentUser_loading, getCurrentUser_success, getCurrentUser_fail, clearError, clearMessage } = loginSlice.actions;
export default loginSlice.reducer;