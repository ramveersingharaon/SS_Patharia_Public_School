import React from 'react'
import './Contact.css'
import { HiLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { ImMobile } from 'react-icons/im'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contact Us</h1>
            <div className="contactWrapper">
                <div className="top">
                    <div className="form">
                        <h2>Send Message</h2>
                        <div className="contactFormContainer">
                            <form action="https://formspree.io/f/mdornezp" method='post'>
                                <div className="row50">
                                    <div className="input">
                                        <span>First Name</span>
                                        <input type="text" name='First-Name' placeholder='Sushil' required autoComplete='off' />
                                    </div>
                                    <div className="input">
                                        <span>Last Name</span>
                                        <input type="text" name='Last-Name' placeholder='Kumar' required autoComplete='off' />
                                    </div>
                                </div>
                                <div className="row50">
                                    <div className="input">
                                        <span>Email</span>
                                        <input type="email" name='Email' placeholder='example@gmail.com' required autoComplete='off' />
                                    </div>
                                    <div className="input">
                                        <span>Mobile</span>
                                        <input type="text" name='Mobile' placeholder='+91 8425643248' required autoComplete='off' />
                                    </div>
                                </div>
                                <div className="rowtextarea">
                                    <div className="textarea">
                                        <span>Message</span>
                                        <textarea name='Message' placeholder='Write your Message here' required autoComplete='off' />
                                    </div>
                                </div>
                                <div className="contactBtn">
                                    <button type='submit'>SEND</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="address">
                        <h2>Get in Touch</h2>
                        <div className="addressWrapper">
                            <div className="icon location"><span><HiLocationMarker /></span> <p>Kacholora Azamabad Araon Firozabad</p> </div>
                            <div className="icon Email"><span><MdEmail /></span> <p>example@email.com</p> </div>
                            <div className="icon Mobile"><span><ImMobile /></span> <p>+91 9465743525</p></div>
                            <div className="icon WhatsAap"><span><IoLogoWhatsapp /></span> <p>+91 9465743525</p></div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="map">
                        <div className="mapWrapper">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d957.8011763826778!2d78.70886167575624!3d27.16196117906633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1687065681822!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
