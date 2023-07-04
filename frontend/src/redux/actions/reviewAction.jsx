
import API from "../../API";
import { deleteReview_fail, deleteReview_loading, deleteReview_success, getReview_fail, getReview_loading, getReview_success, leaveReview_fail, leaveReview_loading, leaveReview_success } from "../reducers/reviewSlices";


export const leaveReview = ({ name, message, avatar }) => async (dispatch) => {
    dispatch(leaveReview_loading());
    try {
        const { data } = await API.post('/review/leave_review', { name, message, avatar });
        dispatch(leaveReview_success(data))
    } catch (error) {
        dispatch(leaveReview_fail(error.response.data.message))
    }
}




export const getReview = () => async (dispatch) => {
    dispatch(getReview_loading());
    try {
        const { data } = await API.get('/review/get_review');
        // console.log(data)
        dispatch(getReview_success(data))
    } catch (error) {
        dispatch(getReview_fail(error.response.data.message))
    }
}


export const deleteReview = (_id) => async (dispatch) => {
    dispatch(deleteReview_loading());
    try {
        const { data } = await API.delete('/review/delete_review', {
            headers: {
                _id: _id
            }
        });
        console.log(data)
        dispatch(deleteReview_success(data))
    } catch (error) {
        dispatch(deleteReview_fail(error.response.data.message))
    }
}
