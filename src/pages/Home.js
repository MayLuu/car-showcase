import uuid from "react-uuid";
import { CATEGORIES, DATA } from "../data";
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
                    <span>Các dòng xe</span>
                    <h2>Đầy đủ các dòng xe sang, hiện đại</h2>
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
                        <img src="img/about.png" alt="" />
                    </div>
                    <div className="about-text">
                        <span>Về chúng tôi</span>
                        <h2>
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
                    <span>Được mua nhiều</span>
                    <h2>Những dòng xe bán chạy nhất hãng</h2>
                    <p>
                        Khách hàng liên hệ trực tiếp với MErcedes sẽ nhận ưu đãi tiền mặt đến hàng trăm triệu đồng cùng gói quà tặng bảo hiểm. phụ kiện cao cấp.
                    </p>
                </div>
                {/* <!--parts container--> */}
                <div className="parts-container container">
                    {/* <!--Box 1--> */}

                    {
                        DATA.slice(0, 3).map(item => {
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
                    <span>Blog & News</span>
                    <h2>Our Blog Content</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                        fugit hic molestias numquam voluptate, dolores sit dolorem quisquam
                        maiores.
                    </p>
                </div>
                {/* <!--Blog Container--> */}
                <div className="blog-container container">
                    {/* <!--Box 1--> */}
                    <div className="box">
                        <img src="img/car1.jpg" alt="" />
                        <span>August 21 2022</span>
                        <h3>How To Get Perfect Car At Low Price</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                            fugit hic molestias numquam voluptate, dolores sit dolorem quisquam
                            maiores.
                        </p>
                        <a href="/" className="blog-btn"
                        >Read More<i className="bx bx-right-arrow-alt"></i>
                        </a>
                    </div>

                    {/* <!--Box 2--> */}
                    <div className="box">
                        <img src="img/car8.jpg" alt="" />
                        <span>August 21 2022</span>
                        <h3>How To Get Perfect Car At Low Price</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                            fugit hic molestias numquam voluptate, dolores sit dolorem quisquam
                            maiores.
                        </p>
                        <a href="/" className="blog-btn"
                        >Read More<i className="bx bx-right-arrow-alt"></i>
                        </a>
                    </div>

                    {/* <!--Box 3--> */}
                    <div className="box">
                        <img src="img/car3.jpg" alt="" />
                        <span>August 21 2022</span>
                        <h3>How To Get Perfect Car At Low Price</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                            fugit hic molestias numquam voluptate, dolores sit dolorem quisquam
                            maiores.
                        </p>
                        <a href="/" className="blog-btn"
                        >Read More<i className="bx bx-right-arrow-alt"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}