import React, { useRef } from 'react';
import ContactForm from '../components/ContactForm';

export const ContactUs = () => {


    return (
        <div>
            <section className='home'>
                {/* <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Số điện thoại</label>
                    <input type="email" name="user_email" />
                    <label>Số điện thoại</label>
                    <input type='number' name="message" />
                    <input type="submit" value="Send" />
                </form> */}
                <ContactForm />
            </section>
        </div>
    );
};