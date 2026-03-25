import './Subscription.css'

export function Subscription(){
    return(
        <section id="subscribe">
            <p className="subscribe-title"></p>
            <p className="subscribe-description"></p>
            <div className="subscribe-container">
                <form action="" method="post">
                    <input type="email" placeholder="Enter your email" />
                    <input type="submit" value="Subscribe"/>
                </form>
            </div>
        </section>
    )
}