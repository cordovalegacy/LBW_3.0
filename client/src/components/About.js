import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className='about-main'>
            <div className='about-container'>
                <h2 id='about-mission'>Our purpose is to collide science and art into something you can touch, enjoy, and smile about! Legacy Builds LLC. is a custom computer business with a focus on building a community of technology lovers, one desktop at a time</h2>
                <div id='about-wrapper'>
                    <h3 id='about-reviews'>"Incredible service"</h3>
                    <h3 id='about-reviews'>"One hell of a present for my kiddo's graduation"</h3>
                    <h3 id='about-reviews'>"Wouldn't have been possible without the care and attention Brendan brings to his work and customers"</h3>
                    <h3 id='about-reviews'>"Legacy Builds helped me elevate my business performance by building me something that could handle the workload!"</h3>
                </div>
            </div>
            <br/>
            <div className='about-container-2'>
                <div id='about-style-1'>
                    <h3 id='about-headers'>Contact Us</h3>
                    <p id='about-contact-info'>Owner, Builder, Tech Support: Brendan Cordova</p>
                    <p id='about-contact-info'>Phone: (425)385-9807</p>
                    <p id='about-contact-info'>Email: legacybuildspc@gmail.com</p>
                </div>
                <div id='about-style-2'>
                    <h3 id='about-headers-2'>Questions? We are here to support you.</h3>
                    <p>Check out our FAQ's!</p>
                    <Link to='/builds/faq'>Frequently Asked Questions</Link>
                </div>
                <div id='about-style-1'>
                    <h3 id='about-headers'>Hours</h3>
                    <p>We operate as a remote business, so we are always available by text message or email</p>
                    <p>Unsure about what you want? Schedule a phone call!</p>
                </div>
            </div>
        </div>
    )
}

export default About;