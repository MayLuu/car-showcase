import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import '../styles/formStyles.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactForm() {
    const form = useRef();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const notify = () => toast("Đăng ký thành công!");


    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();

        emailjs.sendForm('service_wq3krmc', 'template_1yk657s', form.current, 'HEUPCMiwdjgkSkNNB')
            .then((result) => {
                setName('');
                setPhone('');
                notify();
                setLoading(false);

            }, (error) => {
                setLoading(false);

            });
    };

    return (
        <>
            <h3 className='bold'>Đăng ký nhận tư vấn</h3>
            <div className='form-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <input name='to_name' type='text' value="Lưu Ân" hidden />
                    <input name='car' type='text' value="Mercedes Benz" hidden />
                    <label>Tên khách hàng <span>*</span> </label>
                    <input required placeholder='Nhập họ tên' value={name} onChange={(e) => setName(e.target.value)} type="text" name="from_name" />
                    <label>Số điện thoại <span>*</span> </label>
                    <input required placeholder='Nhập số điện thoại' value={phone} onChange={(e) => setPhone(e.target.value)} type="text" name="message" />
                    <input disabled={loading === true} className='submit-btn' type="submit" value="Gửi liên hệ" />
                </form>
                <ToastContainer position="top-right"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    toastStyle={{ backgroundColor: "#8ADAB2" }}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="light" />
            </div>
        </>
    );
}