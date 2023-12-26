import { CATEGORIES } from "../data";

export const Header = () => {
    return (
        <div className="nav container">
            <i onClick={() => { }} className="bx bx-menu" id="menu-icon"></i>
            <a href="/" className="logo"
            >
                {/* <img
                    src="../../public/favicon.svg"
                    // style={{ width: "40px", height: "40px" }}
                    alt=""
                /> */}
                <span>Mercedes Benz</span>
            </a>

            <ul className="navbar">
                <li><a href="/">Trang chủ</a></li>
                <li className="dropdown">
                    <a href="/dong-xe" >Xe Mercedes<i></i></a>
                    <div className="dropdown-content">
                        {CATEGORIES.map((cate) => {
                            var link = '/' + cate.name.replace(' ', '-');

                            return <div key={cate.id}>
                                <a href={link}>{cate.name}</a>
                            </div>

                        })}

                    </div>
                </li>
                <li><a href="/bang-gia">Bảng giá</a></li>
                <li><a href="/tra-gop">Trả góp</a></li>
                <li><a href="/">Tin tức</a></li>
                <li><a href="/lien-he">Liên hệ</a></li>
            </ul>
            <i className="bx bx-search" id="search-icon"></i>
            <div className="search-box container">
                <input type="search" name="" id="" placeholder="Search here..." />
            </div>

        </div>
    );
}

export default Header;