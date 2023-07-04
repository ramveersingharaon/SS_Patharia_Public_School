import { createSlice } from '@reduxjs/toolkit'



const teacherSlices = createSlice({
    name: "teacher",
    initialState: {
        teachers: [],
        loading: true
    },
    reducers: {
        createTeacher_loading(state) {
            state.loading = true
        },
        createTeacher_success(state, action) {
            state.loading = false
            state.teacher = action.payload.teacher;
            state.message = action.payload.message;
        },
        createTeacher_fail(state, action) {
            state.loading = false;
            state.error = action.payload
        },

        // GET TEACHER 

        getTeacher_loading(state) {
            state.loading = true
        },
        getTeacher_success(state, action) {
            state.loading = false
            state.teachers = action.payload.teachers;
            // state.message = action.payload.message;
        },
        getTeacher_fail(state, action) {
            state.loading = false;
            state.error = action.payload
        },

        // DELETE TEACHER 
        deleteTeacher_loading(state) {
            state.loading = true
        },
        deleteTeacher_success(state, action) {
            state.loading = false
            state.teacher = action.payload.teacher;
            state.message = action.payload.message;
        },
        deleteTeacher_fail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        clearMessage(state) {
            state.message = null
        },
        clearError(state) {
            state.error = null
        },
    }
})

export const { createTeacher_loading, createTeacher_success, createTeacher_fail, getTeacher_loading, getTeacher_success, getTeacher_fail, deleteTeacher_loading, deleteTeacher_success, deleteTeacher_fail, clearError, clearMessage } = teacherSlices.actions;


export default teacherSlices.reducer;