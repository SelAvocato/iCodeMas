import { useState, useEffect, useRef } from 'react'
import './Main.css'

export function Main() {
    const newDate = new Date()
    const christmasDay = useRef((() => {
        const day = new Date()
        return new Date(day.getFullYear(), 11, 25, 0, 0, 0)
    })())

    const [difference, setDifference] = useState(christmasDay - newDate)

    const secondsLeft = Math.floor(difference / 1000)
    const minutesLeft = Math.floor(secondsLeft / 60)
    const hoursLeft = Math.floor(minutesLeft / 60)
    const daysLeft = Math.floor(hoursLeft / 24)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDifference(christmasDay.current - new Date())
        }, 1000)

        return () => { clearInterval(intervalId) }
    }, [])

    return (
        <main>
            <p className="main-header">iCodeMas is coming to town</p>
            <p className="main-subtext">Celebrate the Magic of the Season! Exclusive Christmas Challenges for <span
                id="span-days-remaining">24</span> days!</p>
            <div className="countdown-container">
                <div className="countdown-wrapper">
                    <div className="countdown-card">
                        <p id="countdown-text" className='days'>{(daysLeft).toString().padStart(2, '0')}</p>
                        <p className="card-time">Days</p>
                    </div>
                    <div className="countdown-card">
                        <p id="countdown-text" className='hours'>{(hoursLeft % 24).toString().padStart(2, '0')}</p>
                        <p className="card-time">Hours</p>
                    </div>
                    <div className="countdown-card">
                        <p id="countdown-text" className='minutes'>{(minutesLeft % 60).toString().padStart(2, '0')}</p>
                        <p className="card-time">Minutes</p>
                    </div>
                    <div className="countdown-card">
                        <p id="countdown-text" className='seconds'>{(secondsLeft % 60).toString().padStart(2, '0')}</p>
                        <p className="card-time">Seconds</p>
                    </div>
                </div>
            </div>
        </main>
    )
}