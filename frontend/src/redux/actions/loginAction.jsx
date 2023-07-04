// import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import { login_loading, login_success, login_fail, getCurrentUser_loading, getCurrentUser_success, getCurrentUser_fail } from '../reducers/loginSlices'


export const login = ({ email, password }) => async (dispatch) => {
    try {
        dispatch(login_loading());
        const { data } = await API.post('user/login', { email, password });

        if (data.success) {
            localStorage.setItem('token', data.token);
            dispatch(login_success(data))
        }
        window.location.replace('/admin')

    } catch (error) {
        console.log(error)
        dispatch(login_fail(error.response.data.message))
    }
}

export const getCurrentUser = () => async (dispatch) => {
    try {
        dispatch(getCurrentUser_loading());
        const { data } = await API.get('/user/currentUser');

        dispatch(getCurrentUser_success(data));
    } catch (error) {
        // console.log(error)
        dispatch(getCurrentUser_fail(error.response.data.message));
    }
}


