import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { DATA } from '../data';

export const PriceTable = () => {
    const form = useRef();



    return (
        <div style={{ padding: "2em 1em" }}>
            <section className='parts'>
                <div className='heading'>
                    {/* <span>Được mua nhiều</span> */}
                    <h2>Bảng giá xe</h2>
                    <p>
                        Khách hàng liên hệ trực tiếp với MErcedes sẽ nhận ưu đãi tiền mặt đến hàng trăm triệu đồng cùng gói quà tặng bảo hiểm. phụ kiện cao cấp.
                    </p></div>

                <div className='parts-container container'>
                    <table>
                        <tr>
                            <th>Dòng xe</th>
                            <th>Giá</th>
                        </tr>

                        {
                            DATA.map((item) => {
                                return <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price} đ</td>
                                </tr>
                            })
                        }
                    </table>

                </div>
            </section>
        </div>
    );
};