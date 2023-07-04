import React, { useEffect, useState } from 'react'
import './Home.css'
import TeacherTeam from '../Card/TeacherTeam'
import ReviewCard from '../Card/ReviewCard';
import FacilitiesCard from '../Card/FacilitiesCard';
import heroImage from '../../../public/image/hero.jpg'
import RevviewForm from '../Card/RevviewForm';
import why_choose from '../../../public/image/why_choose.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearError, clearMessage } from '../../redux/reducers/reviewSlices';
const Home = () => {
    const { error, message } = useSelector(state => state.review);

    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false);


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
        <div className='home'>
            <div className="hero" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="heroWrapper">
                    <h1>WELCOME TO </h1>
                    <h1> SS PATHARIA PUBLIC SCHOOL</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni accusamus earum quod, molestiae expedita porro soluta illum voluptatum, quae laborum delectus alias.</p>
                    <button className='btn'>REGISTER NOW</button>
                </div>
            </div>
            <div className="facilities">
                <div className="facilitiesWrapper">
                    <h1> STUDENT FACILITIES</h1>
                    <FacilitiesCard />

                </div>
            </div>

            <div className="TeacherTeam">
                <h1>TEACHER TEAM</h1>
                <div className='teamWrapper'>
                    <TeacherTeam />
                </div>
            </div>
            <div className="why_choose">
                <h1>Why Choose us ?</h1>
                <div className="why_chooseContainer">
                    <div className="why_chooseImage">
                        <img src={why_choose} alt="why_choose" />
                    </div>
                    <div className="why_chooseContent">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nulla animi tempore quaerat impedit esse perferendis? Consequuntur odio quos ratione alias impedit consectetur commodi delectus pariatur odit. Praesentium dicta aut nam debitis minus?</p>
                    </div>

                </div>
            </div>
            <div className="review">
                <h1>PERENTS REVIEW</h1>
                <div className="reviewWrapper">
                    <ReviewCard />

                </div>
                <div className={toggle ? "leaveReview" : "leaveReview active"}>
                    <h2>Leave Review</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis aut nesciunt placeat quae nulla sequi voluptatum, atque, cumque quaerat rerum eveniet nisi. Modi neque, eum earum tempore odit tempora eos, </p>
                    <button className='btn' onClick={() => setToggle(!toggle)}>Leave Review</button>
                    <div className='reviewForm' >
                        <RevviewForm toggle={toggle} setToggle={setToggle} />
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Home
