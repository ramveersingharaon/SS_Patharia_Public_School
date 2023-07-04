import React, { useEffect } from 'react'
import './Admin.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaQuoteLeft } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { deleteReview, getReview } from '../../redux/actions/reviewAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearError, clearMessage } from '../../redux/reducers/reviewSlices';

const Admin = () => {
    const { reviews, message, error } = useSelector(state => state.review)
    const dispatch = useDispatch();

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    useEffect(() => {
        dispatch(getReview())
    }, [])

    async function deleteReviewHandle(_id) {
        await dispatch(deleteReview(_id))
        dispatch(getReview())
    }



    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearError())
        }
        if (message) {
            toast.success(message)
            dispatch(clearMessage())
        }
    }, [message, error, dispatch])
    return (
        <div className='admin'>
            <div className="reviewContainer">
                <h1 style={{ textAlign: "center" }}>REVIEWS</h1>
                <Carousel responsive={responsive}
                    showDots={true}>

                    {reviews && reviews.map((review) => {
                        return <div className="reviewCard" key={review._id}>
                            <img src={review.avatar.url} alt="review" />
                            <h2>{review.name}</h2>
                            <p><FaQuoteLeft className='commas' />{review.message}</p>
                            <button className='reviewDeleteBtn' onClick={() => deleteReviewHandle(review._id)} >Delete</button>
                        </div>
                    })}

                </Carousel>
            </div>
            <div className="Teacher">
                <NavLink to='/admin/teacher'> <button className='goTeacherBtn'>Teacher <FaArrowRight /></button></NavLink>
            </div>

        </div>
    )
}

export default Admin
