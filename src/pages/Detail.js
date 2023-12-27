import { useParams } from "react-router-dom"
import '../styles/detailStyles.css'
import 'react-tabs/style/react-tabs.css';

import { DATA } from "../data"


import React, { useState } from "react";
import uuid from "react-uuid";
import { Carousel } from "../components/Carousel";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";

export const DetailPage = () => {
    const params = useParams()
    const item = DATA.filter(i => i.name.replace(' ', '-') === params.id)[0]
    const [show, setShow] = useState(false)



    return (
        <section className="home">
            <Modal show={show} handleClose={() => { setShow(false) }}>
            </Modal>
            <div className="container">
                <div className="title">{item.name}</div>
                <div className="detail">
                    <div className="image">
                        <Carousel data={item.imageUrl.reverse()} />

                    </div>
                    <div className="content">
                        <h1 className="name">{item.name}</h1>
                        <div className="price">Giá: {item.price} đ</div>
                        <div className="buttons">
                            <button onClick={() => {
                                setShow(true)
                            }}>Liên hệ</button>
                            <button onClick={() => {
                                setShow(true)
                            }}>Mua ngay
                                <i style={{ color: "white", paddingLeft: "2px" }} class='bx bx-cart-add' ></i>

                            </button>
                        </div>
                        <div className="description">
                            <strong>Dòng xe</strong>: {item.category} <br />
                            <strong>Nhiên liệu</strong>: {item.material} <br />
                            <strong>Tốc độ tối đa</strong>: {item.speed}
                        </div>
                    </div>
                </div>
                <div className="info" style={{ marginTop: "1em" }}>
                    <div className="box">
                        <div className="title">Giới thiệu</div>
                        <div className="description">
                            {item?.intro}
                        </div>
                    </div>
                    <div className="box">
                        <div className="title">Thông số kỹ thuật</div>
                        <div className="description number-des">

                            <div className="column">
                                <div className="row">
                                    <h5>Chiều dài</h5>
                                    <p>{item.size[0]} mm</p>
                                </div>
                                <div className="row">
                                    <h5>Chiều rộng</h5>
                                    <p>{item.size[1]} mm</p>
                                </div>
                                <div className="row">
                                    <h5>Chiều cao</h5>
                                    <p>{item.size[2]} mm</p>
                                </div>
                                <div className="row">
                                    <h5>Năm mô hình</h5>
                                    <p>{item.year}</p>
                                </div>
                                <div className="row">
                                    <h5>Khối lượng</h5>
                                    <p>{item.weight}</p>
                                </div>
                                <div className="row">
                                    <h5>Màu ngoại thất</h5>
                                    <p>{item.color[0]}</p>
                                </div>
                                <div className="row">
                                    <h5>Màu nội thất</h5>
                                    <p>{item.color[1]}</p>
                                </div>
                                <div className="row">
                                    <h5>Số ghế</h5>
                                    <p>{item.chair}</p>
                                </div>
                            </div>

                        </div>
                        <div className="box">
                            <div className="title">Trang bị tiêu chuẩn</div>
                            <div className="description">
                                <div className="column">

                                    <ul>
                                        {item.description.map((des, index) => {
                                            return <li key={uuid()}>{index + 1}. {des}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title">Cùng dòng với {item.name}</div>
                <div className="listProduct">
                    <div>
                        <section className="parts" id="parts">
                            <div className="parts-container container">
                                {
                                    DATA.map(data => {
                                        return data.category === item.category && data.name !== item.name ? <div key={uuid()} className="box flex-2">
                                            <Card item={data} />
                                        </div> : <></>
                                    })
                                }

                            </div>
                        </section>
                    </div>

                </div>
            </div>

        </section>
    )
}