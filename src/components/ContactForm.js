import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';



export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        var templateParams = {
            name: 'James',
            notes: 'Check this out!',
            email: "myluu4444@gmail.com",
            message: "Hi"
        };
        emailjs.sendForm('service_wq3krmc', 'template_1yk657s', form.current, 'HEUPCMiwdjgkSkNNB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="text" name="user_email" />
                    <label>Dòng xe</label>
                    <input type="car" name="user_car" />
                    <label>Số điện thoại</label>
                    <input type='number' name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </>
    );
}