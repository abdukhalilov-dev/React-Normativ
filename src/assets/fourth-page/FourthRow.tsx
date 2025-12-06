import { useEffect, useState } from 'react';
import './FourthRow.css';

import arrowLeft from '../../assets/icons/arrow-left.png';
import arrowRight from '../../assets/icons/arrow-right-icon.png';

function FourthRow() {
    const targetDate = new Date("2025-08-25T00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((distance / 1000 / 60) % 60),
                    seconds: Math.floor((distance / 1000) % 60),
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="sales">
            <div className="sales__top">
                <span className="sales__top-span"></span>
                <p className="sales__top-p">Today's</p>
            </div>

            <div className="sales__title">
                <div className="sales__timer">
                    <h1 className="sales__title-h1">Flash Sales</h1>

                    <div className="days__owner">
                        <div className="sales__day">
                            <div className="sales__day-texts">
                                <p className="sales__day-title">Days</p>
                                <p className="sales__day-timer">{timeLeft.days}</p>
                            </div>
                            <div className="sales__day-dote">
                                <p className="dote">:</p>
                            </div>
                        </div>

                        <div className="sales__day">
                            <div className="sales__day-texts">
                                <p className="sales__day-title">Hours</p>
                                <p className="sales__day-timer">{timeLeft.hours}</p>
                            </div>
                            <div className="sales__day-dote">
                                <p className="dote">:</p>
                            </div>
                        </div>

                        <div className="sales__day">
                            <div className="sales__day-texts">
                                <p className="sales__day-title">Minutes</p>
                                <p className="sales__day-timer">{timeLeft.minutes}</p>
                            </div>
                            <div className="sales__day-dote">
                                <p className="dote">:</p>
                            </div>
                        </div>

                        <div className="sales__day">
                            <div className="sales__day-texts">
                                <p className="sales__day-title">Seconds</p>
                                <p className="sales__day-timer">{timeLeft.seconds}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sales__title-btn">
                    <button className="title-btn">
                        <img src={arrowLeft} alt="" className="btn-img" />
                    </button>
                    <button className="title-btn">
                        <img src={arrowRight} alt="" className="btn-img" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FourthRow;
