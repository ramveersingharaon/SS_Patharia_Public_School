import React, { useEffect, useState } from 'react'
import './ReviewCard.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaQuoteLeft } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { getReview } from '../../redux/actions/reviewAction';
import { useSelector } from 'react-redux';

const ReviewCard = () => {
    const { reviews } = useSelector(state => state.review)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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


    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getReview())
    }, [])

    return (
        <>
            <Carousel responsive={responsive}
                showDots={true}>

                {reviews.map((review) => {
                    return <div className="reviewCard" key={review._id}>
                        <img src={review.avatar.url} alt="review" />
                        <h2>{review.name}</h2>
                        <p><FaQuoteLeft className='commas' />{review.message}</p>
                    </div>
                })}
            </Carousel>
        </>
    )
}

export default ReviewCard
