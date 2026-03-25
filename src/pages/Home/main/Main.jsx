import './Main.css'

export function Main() {
    return (
        <main>
            <p class="main-header">iCodeMas is coming to town</p>
            <p class="main-subtext">Celebrate the Magic of the Season! Exclusive Christmas Challenges for <span
                id="span-days-remaining">24</span> days!</p>
            <div class="countdown-container">
                <div class="countdown-wrapper">
                    <div class="countdown-card">
                        <p id="countdown-days">23</p>
                        <p class="card-time">Days</p>
                    </div>
                    <div class="countdown-card">
                        <p id="countdown-days">23</p>
                        <p class="card-time">Hours</p>
                    </div>
                    <div class="countdown-card">
                        <p id="countdown-minutes">58</p>
                        <p class="card-time">Minutes</p>
                    </div>
                    <div class="countdown-card">
                        <p id="countdown-seconds">30</p>
                        <p class="card-time">Seconds</p>
                    </div>
                </div>
            </div>
        </main>
    )
}