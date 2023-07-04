import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        loading: false,
        reviews: []

    },
    reducers: {
        leaveReview_loading(state, action) {
            state.loading = true;
        },
        leaveReview_success(state, action) {
            state.loading = false;
            state.review = action.payload;
            state.message = action.payload.message
        },
        leaveReview_fail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        getReview_loading(state, action) {
            state.loading = true;

        },
        getReview_success(state, action) {
            state.loading = false;
            state.reviews = action.payload.reviews;
            // state.message = action.payload.message
        },
        getReview_fail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        deleteReview_loading(state, action) {
            state.loading = true;
        },
        deleteReview_success(state, action) {
            state.loading = false;
            state.message = action.payload.message
        },
        deleteReview_fail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        clearError(state) {
            state.error = null
        },

        clearMessage(state) {
            state.message = null
        }

    },


});

export const { leaveReview_loading, leaveReview_success, leaveReview_fail, getReview_loading, getReview_success, getReview_fail, deleteReview_loading, deleteReview_success, deleteReview_fail, clearError, clearMessage } = reviewSlice.actions;

export default reviewSlice.reducer;