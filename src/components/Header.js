import { useState } from "react";
import { CATEGORIES } from "../data";
import { ReactComponent as Logo } from '../logo.svg'
import { Modal } from "./Modal";
export const Header = () => {
    const [hidden, setHidden] = useState(false);
    const [show, setShow] = useState(false)

    return (
        <div className="nav container">
            <Modal show={show} handleClose={() => { setShow(false) }}>
            </Modal>
            <i onClick={() => {
                console.log('hi');
                setHidden((prev) => !prev)
            }} className="bx bx-menu" id="menu-icon"></i>
            <a href="/" className="logo"
            >
                <Logo />
                <span>Mercedes Benz</span>
            </a>

            <div id="mySidenav" style={{ display: hidden ? "block" : "none", width: hidden ? "60%" : "0px", color: "#313131" }} className={`sidenav ${hidden ? '' : 'hidden'}`} >
                <a onClick={() => {
                    setHidden(false)
                }} class="closebtn" onclick="closeNav()" style={{ display: hidden ? "block" : "none", justifyContent: "end", margin: "0 1em", color: "white" }}>&times;</a>
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
                <li><a href="/tin-tuc">Tin tức</a></li>
                <li><a href="/lien-he">Liên hệ</a></li>
            </div>

            <ul className={` navbar `} >
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
                <li><a href="/tin-tuc">Tin tức</a></li>
                <li><a href="/lien-he">Liên hệ</a></li>
            </ul>
            <i className="bx bx-search" id="search-icon"></i>
            <div className="search-box container">
                <input type="submit" placeholder="Search here..." />
            </div>

        </div >
    );
}

export default Header;