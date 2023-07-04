import React from 'react'
import './Footer.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { BsWhatsapp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import footerImage from '../../../public/image/footer.png'

const Footer = () => {


    return (
        <div className='footer' style={{ backgroundImage: `url(${footerImage})`, backgroundSize: "cover" }}>
            <div className="footerWrapper">
                <div>
                    <h1>Address</h1>
                    <p>Kacholara Azamabad Araon Sirsagang Firozabad (Uttar Pradesh) - 205121
                        INDIA</p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p className='contactIcon'><BsFillTelephoneFill /> <span>+91 0000000000</span></p>
                    <p className='contactIcon'><GrMail /><span>example@mail.com</span></p>
                    <p className='contactIcon'><BsWhatsapp /><span>+91 0000000000</span></p>

                </div>
                <div><h1>Links</h1>
                    <NavLink className='navlink' to='/about'><li style={{ padding: "1rem 0" }}>About Us</li></NavLink>
                    <NavLink className='navlink' to='/contact'><li style={{ padding: "1rem 0" }}>Contact Us</li></NavLink>
                </div>
            </div>
            <div className="bottomFooter">
                <p>  Copyright © SS Patharia Public School 2023 All Rights Reserved</p>
            </div>

        </div >
    )
}

export default Footer
