import React, { useState } from 'react'
import './ReviewForm.css';
import { useDispatch } from 'react-redux'
import { getReview, leaveReview } from '../../redux/actions/reviewAction';



const RevviewForm = ({ toggle, setToggle }) => {

    const dispatch = useDispatch()


    const initialState = {
        name: "",
        message: "",
    }

    const [review, setReview] = useState(initialState)

    const onchangeHandler = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value })
    }


    const handleImage = (e) => {
        const Reader = new FileReader();
        Reader.readAsDataURL(e.target.files[0]);
        Reader.onload = () => {
            if (Reader.readyState == 2) {
                setReview({ ...review, avatar: Reader.result })
            }
        }
    }
    const submitHandler = async () => {
        setToggle(!toggle)
        await dispatch(leaveReview({ ...review }))
        dispatch(getReview())


        console.log(review)
        setReview(initialState)
    }


    return (

        <div className='reviewFormContainer'>
            <fieldset>
                <legend> Leave Review</legend>
                <form>
                    <input type="text" placeholder='Enter Your Name' name='name' value={review.name} onChange={onchangeHandler} />
                    <textarea name="message" placeholder='Write Your Review here....' value={review.message} onChange={onchangeHandler}></textarea>
                    <input type="file" className='fileInput' accept='image/' onChange={handleImage} />
                </form>
                <button className='btn' onClick={submitHandler} >Send</button>
            </fieldset>

        </div>
    )
}

export default RevviewForm;
