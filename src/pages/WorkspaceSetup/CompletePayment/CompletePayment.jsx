import "./CompletePayment.css";

const CompletePayment = () => {
    return (
        <div className="payment-wrapper">
            <div className="payment-container">

                {/* Back Arrow */}
                {/* <button className="back-btn">←</button> */}

                {/* Heading */}
                <h2 className="payment-title">Complete Payment</h2>
                <p className="payment-subtitle">
                    Secure your workspace domain with a one-time<br />payment
                </p>

                {/* Domain Card */}
                <div className="payment-card">
                    <div className="card-left">
                        <img 
                            src="https://i.pravatar.cc/40" 
                            alt="avatar" 
                            className="avatar"
                        />
                        <div>
                            <p className="domain-label">Your Domain</p>
                            <p className="domain-name">sachin2.pmg.pmg.engineering</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="card-bottom">
                        <p className="fee-title">Domain Registration Fee</p>
                        <p className="fee-amount">₹1000/-</p>
                    </div>
                </div>

                {/* Payment Button */}
                <button className="payment-btn">Make Payment</button>

            </div>
        </div>
    );
};

export default CompletePayment;