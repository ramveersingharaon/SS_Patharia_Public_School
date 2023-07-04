import React from 'react'
import './FacilitiesCard.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bus from '../../../public/image/facilities/bus.jpg'
import computer_class from '../../../public/image/facilities/computer_class.jpg'
import library from '../../../public/image/facilities/library.jpg'
import sports from '../../../public/image/facilities/sports.jpg'


const FacilitiesCard = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel responsive={responsive}
                showDots={true}>
                <div className='facilitesCard'>
                    <h2>Transport</h2>
                    <img src={bus} alt="school bus" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit expedita adipisci dicta tempore, ex iusto consequuntur autem consectetur ipsa debitis. Id.</p>
                </div>
                <div className='facilitesCard'>
                    <h2>Computer Class</h2>
                    <img src={computer_class} alt="computer class" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit expedita adipisci dicta tempore, ex iusto consequuntur autem consectetur ipsa debitis. Id.</p>
                </div>
                <div className='facilitesCard'>
                    <h2>Library</h2>
                    <img src={library} alt="library" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit expedita adipisci dicta tempore, ex iusto consequuntur autem consectetur ipsa debitis. Id.</p>
                </div>
                <div className='facilitesCard'>
                    <h2>Sports</h2>
                    <img src={sports} alt="sports" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit expedita adipisci dicta tempore, ex iusto consequuntur autem consectetur ipsa debitis. Id.</p>
                </div>
                <div className='facilitesCard'>
                    <h2>Transport</h2>
                    <img src="image/facilities/bus.jpg" alt="bus" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit expedita adipisci dicta tempore, ex iusto consequuntur autem consectetur ipsa debitis. Id.</p>
                </div>
            </Carousel>
        </>
    )
}

export default FacilitiesCard
