import uuid from "react-uuid";
import { CATEGORIES, DATA, NEWS } from "../data";
import { Card } from "../components/Card";

export const Home = () => {
    return (
        <>
            <section className="home" id="home">
                <div className="home-text">
                    <div className="box">
                        <img src="img/banner2.png" alt="" />
                    </div>
                    <div className="box">
                        <h1>
                            Hãy liên hệ với chúng tôi <br />
                            Mercedes Sài Gòn
                        </h1>

                        <p>
                            Mercedes-Benz Haxaco Hồ Chí Minh có trụ sở chính tọa lạc tại Số 6 đường 3/2 P.15, Q.11, Thành phố Hồ Chí Minh. Chúng tôi luôn cam kết mang đến sự hài lòng nhất tới Quý Khách Hàng bằng những Ưu Đãi & Hậu Mãi của sản phẩm theo tiêu chí 5 sao. Sẽ mang đến sự trải nghiệm hoàn toàn mới tới Quý Khách Hàng.
                        </p>
                        {/* <!--home Button--> */}
                        <a href="/" className="btn">+ 098 7654 321</a>
                    </div>
                </div>
            </section>
            {/* <!--cars section--> */}
            <section className="cars" id="cars">
                <div className="heading">
                    <span style={{ fontSize: "1.2em" }}>Các dòng xe</span>
                    <h2 className="bold">Đầy đủ các dòng xe sang, hiện đại</h2>
                    <p>
                        Chúng tôi luôn đặt mong muốn của quý Khách lên hàng đầu
                    </p>
                </div>
                {/* <!--Cars container--> */}
                <div className="cars-container container">
                    {/* <!--Box 1--> */}
                    {CATEGORIES.map(category => {
                        var link = category.name.replace(' ', '-');
                        return <a href={link} key={category.id} className="box">
                            <img src={category.url} alt="dong xe" />
                            <h2>{category.name}</h2>
                        </a>
                    })}


                </div>
            </section>

            {/* <!--About--> */}
            <section>
                <section className="about container" id="about">
                    <div className="about-img">
                        <img src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/328513211_515078427179217_3835672575713190716_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=CpJPiYIgHIgAX_eqFFM&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfAzxEhAQQIvbsbRzKCPvsnM-Nd7ECu5ORDOWDdPdpJs-Q&oe=658FB25C" alt="" />
                    </div>
                    <div className="about-text">
                        <span style={{ fontSize: "1.2em" }}>Về chúng tôi</span>
                        <h2 className="bold">
                            Chất lượng cao <br />
                            Giá cả hợp lý
                        </h2>
                        <p>
                            Dịch vụ hỗ trợ 24h (Star Assist 24h) <br />
                            Mua xe & lái thử xe: thứ Hai-thứ Bảy – 8h-22h  <br />
                            Dịch vụ hậu mãi: thứ Hai-thứ Sáu – 8h-17h
                        </p>
                        {/* <!--About Button--> */}
                        <a href="/" className="btn">Tìm hiểu thêm</a>
                    </div>
                </section>
            </section>
            {/* <!--parts section--> */}
            <section className="parts" id="parts">
                <div className="heading">
                    <span style={{ fontSize: "1.2em" }} >Được mua nhiều</span>
                    <h2 className="bold">Những dòng xe bán chạy nhất hãng</h2>
                    <p>
                        Khách hàng liên hệ trực tiếp với MErcedes sẽ nhận ưu đãi tiền mặt đến hàng trăm triệu đồng cùng gói quà tặng bảo hiểm. phụ kiện cao cấp.
                    </p>
                </div>
                {/* <!--parts container--> */}
                <div className="parts-container container">
                    {/* <!--Box 1--> */}

                    {
                        DATA.slice(0, 6).map(item => {
                            return <div key={uuid()} className="box">
                                <Card item={item} />

                            </div>
                        })
                    }




                </div>
            </section>
            {/* <!--Blog Container--> */}
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
                        NEWS.slice(0.3).map(item => {
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
        </>
    );
}