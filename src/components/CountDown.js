import React, { useState, useEffect } from "react";
import '../styles/countdownStyles.css'

function addHours(date, hours) {
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);

    return date;
}

const COUNTDOWN_TARGET = addHours(new Date(), 10)

const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { hours, minutes, seconds };
    return { days, hours, minutes, seconds };
};

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='countdown'>
            <h4 style={{ textAlign: "center", color: "#d90429", paddingBottom: "0.4em" }} className="bold">Chương trình CHẠY CHỈ TIÊU đặc biệt: giá tốt, quà tặng, phụ kiện. Hãy đăng ký ngay!</h4>
            <h5 style={{ textAlign: "center" }}>Thời hạn còn lại</h5>
            <div className='content'>
                {Object.entries(timeLeft).map((el) => {
                    const label = el[0] === 'days' ? 'ngày' : el[0] === 'hours' ? "giờ" : el[0] === 'minutes' ? "phút" : 'giây';
                    const value = el[1];
                    return (
                        <div className='box' key={label}>
                            <div className='value'>
                                <span className="count-tex">{value}</span>
                            </div>
                            <span className='label'> {label} </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Countdown;