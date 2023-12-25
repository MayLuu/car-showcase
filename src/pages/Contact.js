import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wq3krmc', 'template_1yk657s', form.current, 'HEUPCMiwdjgkSkNNB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <section className='home'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Số điện thoại</label>
                    <input type="email" name="user_email" />
                    <label>Số điện thoại</label>
                    <input type='number' name="message" />
                    <input type="submit" value="Send" />
                </form>
            </section>
        </div>
    );
};