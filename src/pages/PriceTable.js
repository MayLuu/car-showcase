import React from 'react';
import { DATA } from '../data';
import uuid from 'react-uuid';

export const PriceTable = () => {

    return (
        <div style={{ padding: "2em 1em" }}>
            <section className='parts'>
                <div className='heading'>
                    {/* <span>Được mua nhiều</span> */}
                    <h1 className='bold'>Bảng giá xe</h1>
                    <p style={{}}>
                        Khách hàng liên hệ trực tiếp với Mercedes-Benz Haxaco sẽ nhận ưu đãi tiền mặt đến hàng trăm triệu đồng cùng gói quà tặng bảo hiểm, phụ kiện cao cấp.
                    </p></div>

                <div className='parts-container container'>
                    <table>
                        <tr>
                            <th>Dòng xe</th>
                            <th>Giá</th>
                        </tr>
                        {
                            DATA.map((item) => {
                                return <tr key={uuid()}>
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