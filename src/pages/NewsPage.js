import React from 'react';
import { NEWS } from '../data';
import uuid from 'react-uuid';

export const NewsPage = () => {

    return (
        <div>
            <section className="blog" id="blog">
                <div className="heading">
                    <span style={{ fontSize: "1.2em" }}>Tin tức</span>
                    <h2 className="bold">Những nội dung mới cập nhật gần đây</h2>
                    <p>
                        Theo dõi chúng tôi để cập nhật nhwnxng tin tức mới nhất về dòng xe Mercedes Benz cùng những ưu đãi khác
                    </p>
                </div>
                {/* <!--Blog Container--> */}
                <div className="blog-container container">
                    {/* <!--Box 1--> */}
                    {
                        NEWS.map(item => {
                            return <div className="box" key={uuid()}>
                                <img src="https://assets.nationbuilder.com/americanlandscouncil/pages/39/features/original/news.jpg?1469829691" alt="" />
                                <span>{item.date}</span>
                                <h3 className="bold" style={{ overflow: "hidden", maxLines: 2, textOverflow: "ellipsis" }}>{item.name}</h3>
                                <p>
                                    {item.description[0]}
                                </p>
                                <a href="/" className="blog-btn">Xem thêm<i className="bx bx-right-arrow-alt"></i>
                                </a>
                            </div>
                        })
                    }

                </div>
            </section>
        </div>
    );
};