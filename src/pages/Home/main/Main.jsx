import './Main.css'

export function Main() {

    return (
        <main>
            <p className="main-header">iCodeMas is coming to town</p>
            <p className="main-subtext">Celebrate the Magic of the Season! Exclusive Christmas Challenges for <span
                id="span-days-remaining">24</span> days!</p>
            <div className="countdown-container">
                <div className="countdown-wrapper">
                    <div className="countdown-card">
                        <p id="countdown-text" className='days'>23</p>
                        <p className="card-time">Days</p>
                    </div>
                    <div className="countdown-card">
                        <p id="countdown-text" className='hours'>23</p>
                        <p className="card-time">Hours</p>
                    </div>
                    <div className="countdown-card">
                        <p id="countdown-text" className='minutes'>58</p>
                        <p className="card-time">Minutes</p>
                    </div>
                    <div className="countdown-card">
                        <p id="countdown-text" className='seconds'>30</p>
                        <p className="card-time">Seconds</p>
                    </div>
                </div>
            </div>
        </main>
    )
}