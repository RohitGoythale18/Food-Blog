import React from 'react'
import './ContactUs.css'

export default function ContactUs() {
    return (
        <>
            <section className="contact-us-container">
                <h2 id="contact-us-heading">Contact with us</h2>
                <form action="" className="contact-us-form">
                    <input type="text" className='contact-us-form-input' placeholder='Enter your name' />
                    <input type="email" className='contact-us-form-input' placeholder='Enter your email address' />
                    <textarea name="" cols="50" rows="10" className='contact-us-form-input' placeholder='Enter your message...' />
                    <button id='contact-us-form-btn'>Submit</button>
                </form>
            </section>
        </>
    )
}
