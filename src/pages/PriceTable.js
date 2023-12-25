import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const PriceTable = () => {
    const form = useRef();



    return (
        <div>
            <section className='home'>
                <table>
                    <th>Dòng xe</th>
                    <th>Giá</th>
                </table>
            </section>
        </div>
    );
};