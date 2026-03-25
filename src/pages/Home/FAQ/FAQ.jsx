export function FAQ() {
    return (
        <section id="FAQ">
            <p className="faq-header">Frequently asked questions</p>
            <p className="subheader">Have questions? Explore our Frequently Asked Questions section for quick answers. If your question isn't answered, feel free to reach out to our helpful support team.</p>

            <div className="questions-container">
                <div className="question-container">
                    <p className="question">When will my order ship?</p>
                    <div className="answer-container">
                        <p className="answer">
                            Orders typically ship within 1–2 business days. During peak holiday season, please allow up to 3 business days for processing and shipping. You will receive an email notification with tracking information once your order has shipped.
                        </p>
                    </div>
                </div>

                <div className="question-container">
                    <p className="question">What are your shipping rates?</p>
                    <div className="answer-container">
                        <p className="answer">
                            Shipping rates are calculated at checkout based on your location and selected delivery method. We may offer free shipping on orders above a certain amount during promotions.
                        </p>
                    </div>
                </div>

                <div className="question-container">
                    <p className="question">Do you offer gift wrapping?</p>
                    <div className="answer-container">
                        <p className="answer">
                            Yes, we offer gift wrapping for a small additional fee. You can select the gift wrapping option during checkout and include a personalized message for your recipient.
                        </p>
                    </div>
                </div>

                <div className="question-container">
                    <p className="question">What is your return policy?</p>
                    <div className="answer-container">
                        <p className="answer">
                            We accept returns within 14 days of delivery, provided the items are unused and in their original packaging. To initiate a return, please contact our support team with your order details.
                        </p>
                    </div>
                </div>

                <div className="question-container">
                    <p className="question">Do you have a store location?</p>
                    <div className="answer-container">
                        <p className="answer">
                            Currently, we operate exclusively online and do not have a physical store location. This allows us to offer a wider selection and better prices to our customers.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}