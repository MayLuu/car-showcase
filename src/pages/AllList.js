import React from 'react'
import { Card } from '../components/Card'
import { CATEGORIES, DATA } from '../data'
import uuid from 'react-uuid'


export const AllList = () => {
    return (
        <div>
            <section className="parts section-body" id="parts">
                <div className="heading">
                    {/* <span><strong>Dòng xe {actualCate}</strong></span> */}
                    <h1>Các dòng xe Mercedes-Benz </h1>
                    <span className="bold">Những dòng xe sang trọng và đẳng cấp</span>
                    <p style={{}}>
                        Khách hàng liên hệ trực tiếp với Mercedes-Benz Haxaco sẽ nhận ưu đãi tiền mặt đến hàng trăm triệu đồng cùng gói quà tặng bảo hiểm, phụ kiện cao cấp.
                    </p>
                </div>
                <div className="parts-container container ">
                    {DATA.map(item => {
                        return <div key={uuid()} className="box" >
                            <Card item={item} />
                        </div>


                    })}

                </div>


            </section>
        </div>
    )
}
