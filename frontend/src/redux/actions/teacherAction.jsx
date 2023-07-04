import API from "../../API";
import { createTeacher_fail, createTeacher_loading, createTeacher_success, deleteTeacher_fail, deleteTeacher_loading, deleteTeacher_success, getTeacher_fail, getTeacher_loading, getTeacher_success } from "../reducers/teacherSlices"


export const createTeacher = (teacherData) => async (dispatch) => {
    dispatch(createTeacher_loading());
    try {
        const { data } = await API.post('/teacher/add_teacher', { ...teacherData });
        dispatch(createTeacher_success(data))

    } catch (error) {
        dispatch(createTeacher_fail(error.response.data.message))

    }
}

export const getTeacher = () => async (dispatch) => {
    dispatch(getTeacher_loading());
    try {
        const { data } = await API.get('/teacher/get_teacher');
        dispatch(getTeacher_success(data))

    } catch (error) {
        dispatch(getTeacher_fail(error.response.data.message))

    }
}


export const deleteTeacher = (_id) => async (dispatch) => {
    dispatch(deleteTeacher_loading());
    try {
        const { data } = await API.delete('/teacher/delete_teacher', {
            headers: {
                _id: _id
            }
        });
        dispatch(deleteTeacher_success(data))

    } catch (error) {
        dispatch(deleteTeacher_fail(error.response.data.message))

    }
}