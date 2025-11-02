import './Music.css'
import { useEffect, useState } from 'react'

function Music() {
    const [time, setTime] = useState({
        days: 5,
        hours: 23,
        minutes: 59,
        seconds: 35,
    });

    useEffect(() => {
        const timer = setInterval(() => {
        setTime((prev) => {
            let { days, hours, minutes, seconds } = prev

            if (seconds > 0) {
                seconds--;
            } else {
                seconds = 59;
                if (minutes > 0) {
                    minutes--;
                } else {
                    minutes = 59;
                    if (hours > 0) {
                        hours--;
                    } else {
                        hours = 23
                        if (days > 0) {
                            days--;
                        }
                    }
                }
            }

            return { days, hours, minutes, seconds }
        })
    }, 1000);

        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <div className="own__music">
                <div className="music__text">
                    <p className="text-categories">Categories</p>
                    <p className="text-experience">Enhance Your Music Experience</p>

                    <div className="text-days">
                        <div className="text-hours">
                            <p className="hours time">{time.hours}</p>
                            <p className="hours">Hours</p>
                        </div>

                        <div className="text-day text-hours">
                            <p className="day time">{time.days}</p>
                            <p className="day">Days</p>
                        </div>

                        <div className="text-minutes text-hours">
                            <p className="minute time">{time.minutes}</p>
                            <p className="minute">Minutes</p>
                        </div>

                        <div className="text-seconds text-hours">
                            <p className="second time">{time.seconds}</p>
                            <p className="second">Seconds</p>
                        </div>
                    </div>

                    <div className="text-btn">
                        <button className="btn-p">Buy Now!</button>
                    </div>
                </div>

                <div className="music__image">
                    <img src="./src/assets/img/music-speaker.png" alt="" className="music-of-speaker" />
                </div>
            </div>
            {/* <div className="test">.</div> */}
        </>
    )

}

export default Music