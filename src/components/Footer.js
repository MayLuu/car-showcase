import { CATEGORIES } from "../data";

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="footer-container container">
                    <div className="footer-box">
                        <a href="/" className="logo">Mercedes HCM</a>
                        <div className="social">
                            <a href="https://www.facebook.com/hondaoto.3thang2"><i className="bx bxl-facebook"></i></a>
                            <a href="https://www.facebook.com/hondaoto.3thang2"><i className="bx bxl-twitter"></i></a>
                            <a href="https://www.facebook.com/hondaoto.3thang2"><i className="bx bxl-instagram"></i></a>
                            <a href="https://www.facebook.com/hondaoto.3thang2"><i className="bx bxl-youtube"></i></a>
                        </div>
                    </div>
                    <div className="footer-box">
                        <h3>Trang</h3>
                        <a href="/">Trang chủ</a>
                        <a href="/">Xe mercedes</a>
                        <a href="/">Về chúng tôi</a>
                        <a href="/">Liên hệ</a>
                    </div>

                    <div className="footer-box">
                        <h3>Dòng xe</h3>
                        {CATEGORIES.map(cate => {
                            return <a href="/">{cate.name}</a>

                        })}
                    </div>

                    <div className="footer-box">
                        <h3>Liên hệ</h3>
                        <p>Hotline: 090 638 38 77</p>
                        <p>Email: honda.oto.sg.3thang2@gmail.com</p>
                        <p>Website: mercedes-vietnamstar.com.vn</p>
                    </div>
                </div>
            </section >

            <div className="copyright">
                <p>&#169; Mercedes Viet Nam </p>
            </div>
        </>

    );
}

export default Footer;