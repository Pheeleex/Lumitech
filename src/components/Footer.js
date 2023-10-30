import React from 'react'
import Logo from "./Assets/Images/LUMITECH LOGO2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons' 
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faThreads, faTwitter } from '@fortawesome/free-brands-svg-icons';;





const Footer = () => {
  return (
        <div className='footer'>
            <div className='flex1'>
                <div className='logo-contact'>
                    <div className='logo-footer'>
                        <img src={Logo} className='f-logo' />
                    </div>
                        
                    <div className='contact'>
                        <h3 className='us'>Contact Us</h3>
                        <div className='more-contact'>
                        <FontAwesomeIcon icon={faLocationDot} />
                            <p>Entourage Mall @ Block 54 Plot 12<br></br> Adebayo Doherty Street, Road 14,<br></br> 
                                Lekki Phase 1, Lagos - NG</p>
                    </div>

                        <div className='more-contact'>
                        <FontAwesomeIcon icon={faMobile} />
                            <p>09012345678, 08112345678</p>
                        </div>

                        <div className='more-contact'>
                        <FontAwesomeIcon icon={faEnvelope} />
                            <p>lumitechdev@gmail.com</p>
                        </div>

                        <div className='more-contact'>
                        <i class="bi bi-globe-americas"></i>
                        <FontAwesomeIcon icon={faGlobe} />
                            <p>www.lumitec.com</p>
                        </div>

                        <div className='social-icons'>
                            <FontAwesomeIcon icon={faFacebook} className='icon' />
                        <FontAwesomeIcon icon={faTwitter} className='icon' />
                        <FontAwesomeIcon icon={faLinkedin} className='icon' />
                        <FontAwesomeIcon icon={faInstagram} className='icon' />
                        <FontAwesomeIcon icon={faThreads} className='icon' />
                        </div>
                    </div>
                </div>
                <div className='form-others'>
                    <div className='form'>
                        <input 
                            className='input-form'
                            placeholder='Enter Email Address Here' />
                        <button className='subscribe button'>Subscribe</button>
                    </div>

                    <div className='others'>
                        <div className='company'>
                            <h3>Company</h3>
                            <p>How it works</p>
                            <p>Pricing</p>
                            <p>Demo</p>
                        </div>

                        <div className='resources'>
                        <h3>Resources</h3>
                        <p>Blog post name goes here</p>
                        <p>Blog post name goes here</p>
                        <p>Blog post name goes here</p>
                        <p>See all resources</p>
                    </div>

                <div className='about-us'>
                        <h3>About</h3>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
