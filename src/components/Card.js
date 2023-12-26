import React from "react";

export const Card = ({ item }) => {

    var link = item.category.replace(' ', '-') + '/' + item.name.replace(' ', '-')
    return (
        <a href={link}>
            <img src={item.imageUrl[0]} alt="" />
            <h3>{item.name}</h3>
            <h5>{item.price} đ</h5>
            <i className="bx bxs-star">(6 Đánh giá)</i>
            <a href={link} className="btn" style={{ width: "100%", padding: "6px 8px" }}><i class='bx bx-cart-add' style={{ color: "white" }}></i>Mua ngay</a>
            <a href={link} className="details">Xem chi tiết</a>
        </a>
    );
}