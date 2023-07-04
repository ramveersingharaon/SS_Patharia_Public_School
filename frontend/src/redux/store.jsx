import { configureStore } from '@reduxjs/toolkit';
import reviewSlice from './reducers/reviewSlices';
import loginSlice from './reducers/loginSlices';
import teacherSlices from './reducers/teacherSlices';

const store = configureStore({
    reducer: {
        review: reviewSlice,
        login: loginSlice,
        teacher: teacherSlices
    },
});

export default store;