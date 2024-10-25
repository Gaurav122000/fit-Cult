import React, { useRef } from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef() 

    //EmailJS helps to send emails using client-side technologies 
    //only. No server is required – just connect 
    //EmailJS to one of the supported email services, 
    //create an email template, and use one of our SDK 
    //libraries to trigger an email.

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div className="join" id='join'>
                <div className="join-left">
                    <hr />
                    <div>
                        <span className='stroke-text'>Ready to</span>
                        <span>level up</span>
                    </div>
                    <div>
                        <span>your body</span>
                        <span className='stroke-text'>with us</span>
                    </div>
                </div>
                <div className="join-right">
                    <form ref={form} className="email-container" onSubmit={sendEmail}>
                        <input type="email" name="user_email" id="" placeholder='Enter Your Email To Join' />
                        <button className="btn btn-join">Join Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Join