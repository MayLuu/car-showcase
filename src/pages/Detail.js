import { useParams } from "react-router-dom"
import '../styles/detailStyles.css'
import 'react-tabs/style/react-tabs.css';

import { DATA } from "../data"


import React from "react";
import uuid from "react-uuid";
import { Carousel } from "../components/Carousel";

export const DetailPage = () => {
    const params = useParams()
    const item = DATA.filter(i => i.name.replace(' ', '-') === params.id)[0]



    return (
        <section className="home">
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
                            <button>Liên hệ</button>
                            <button>Mua ngay
                                <span>
                                    <svg className="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="description">
                            <strong>Dòng xe</strong>: {item.category} <br />
                            <strong>Nhiên liệu</strong>: {item.material} <br />
                            <strong>Tốc độ tối đa</strong>: {item.speed}
                        </div>
                    </div>
                </div>
                <div className="info">
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
                <div className="title"></div>
                <div className="listProduct"></div>
            </div >

        </section >
    )
}