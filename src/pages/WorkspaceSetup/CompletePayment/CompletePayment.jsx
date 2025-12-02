import { Card, Typography, Button, Divider, Avatar } from "antd";
import axios from "axios";

const { Title, Text } = Typography;

const CompletePayment = () => {

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://pmg.engineering/apis/workspace-payment/?subdomain=oshanktets&user_id=204/";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        const res = await loadRazorpay();
        if (!res) {
            alert("Razorpay SDK failed to load. Check your internet.");
            return;
        }

        // 1️⃣ Call backend to create order
        const result = await axios.post("https://your-backend.com/create-order");

        if (!result) {
            alert("Server error. Try again.");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "YOUR_RAZORPAY_KEY_ID",
            amount: amount.toString(),
            currency: currency,
            name: "PMG Engineering",
            description: "Domain Registration Fee",
            order_id: order_id,

            handler: function (response) {
                console.log("Payment success:", response);

                // send success to backend
                axios.post("https://your-backend.com/payment-success", {
                    order_id: order_id,
                    payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                });

                alert("Payment Successful!");
            },

            prefill: {
                name: "Test User",
                email: "test@gmail.com",
                contact: "9876543210",
            },
            theme: {
                color: "#1677ff",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",
                padding: "20px",
            }}
        >
            <div
                style={{
                    width: 420,
                    background: "#fff",
                    padding: "30px 30px 40px",
                    borderRadius: 12,
                    boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                    textAlign: "center",
                }}
            >
                {/* Heading */}
                <Title level={3} style={{ marginBottom: 10 }}>
                    Complete Payment
                </Title>

                <Text type="secondary" style={{ fontSize: 15 }}>
                    Secure your workspace domain with a one-time<br />payment
                </Text>

                {/* Domain Card */}
                <Card
                    style={{
                        marginTop: 25,
                        borderRadius: 12,
                        padding: 0,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "15px 10px",
                            gap: 12,
                        }}
                    >
                        <Avatar src="https://i.pravatar.cc/40" size={45} />

                        <div style={{ textAlign: "left" }}>
                            <Text type="secondary" style={{ fontSize: 13 }}>
                                Your Domain
                            </Text>
                            <br />
                            <Text strong style={{ fontSize: 16 }}>
                                sachin2.pmg.pmg.engineering
                            </Text>
                        </div>
                    </div>

                    <Divider style={{ margin: 0 }} />

                    <div style={{ padding: "15px 0" }}>
                        <Text type="secondary" style={{ fontSize: 14 }}>
                            Domain Registration Fee
                        </Text>
                        <br />
                        <Text strong style={{ fontSize: 20 }}>
                            ₹1000/-
                        </Text>
                    </div>
                </Card>

                {/* Payment Button */}
                <Button
                    type="primary"
                    size="large"
                    block
                    onClick={handlePayment}
                >
                    Make Payment
                </Button>
            </div>
        </div>
    );
};

export default CompletePayment;