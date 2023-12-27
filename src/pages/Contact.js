import React from 'react';
import ContactForm from '../components/ContactForm';

export const ContactUs = () => {
    return (
        <div className='about'>
            <section className=" contact-body" id="about">
                <div className="about-img">
                    <img src="img/contact.jpg" alt="" />
                </div>
                <div className="about-text">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};