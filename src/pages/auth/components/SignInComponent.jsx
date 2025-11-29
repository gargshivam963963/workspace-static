import { Button, Form, Input } from "antd"
import styles from "./auth.module.css"
import { Link } from "react-router-dom";
import AuthWrapper from "../AuthWrapper";

const SignInComponent = ({ signin }) => {
    const [form] = Form.useForm();
    const handleSubmit = (val) => { console.log("values", val) };

    return (
        <AuthWrapper>
        <div className={styles.authForm}>
            <section>
                <header className={styles.headingBold}>Sign In</header>
            </section>
            <Form
                onFinish={handleSubmit}
                layout="vertical"
                form={form}
            >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        { min: 2 }, // Max length validation
                        { max: 50 },
                    ]}
                    required={false}
                >
                    <Input className="w_full h_40" placeholder="Enter Email ID" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: "Enter New Password" }]}
                    required={false}
                >
                    <Input.Password className="w_full h_40" placeholder="Enter password" />
                </Form.Item>

                <section className={styles.verifyWrapper}>
                    <span className={styles.minimessage}>
                        Forgot Password?
                        <span style={{ color: "var(--secondary-color", textDecoration: "underline", textUnderlineOffset: "40%" }}>Change Now</span>
                    </span>
                </section>

                <Button onClick={() => { }} style={{ width: "100%", marginTop: "40px" }} className="h_44" type="primary">Sign In</Button>
                <span className={`${styles.minimessage}`} style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}>
                    Don't have an account?
                    <Link to="/auth/sign-up">Sign Up</Link>
                    {/* <span style={{ color: "var(--secondary-color", textDecoration: "underline", textUnderlineOffset: "40%" }}>Sign Up</span> */}
                </span>
            </Form>

            <footer className={styles.socialFooter}>
                <div className={`${styles.subheading} ${styles.socialFooter}`} style={{ flexDirection: "row", fontWeight: "var(--font-weight-500)" }}>
                    <span className={styles.divider} />
                    <span>Or continue with</span>
                    <span className={styles.divider} />
                </div>
                <div className={styles.pair} style={{ flexDirection: "row", width: "100%" }}>
                    <button className={styles.socialButtons} style={{ color: "#505050", border: "1px solid #D0D0D0" }}>
                        <img
                            src={`${import.meta.env.VITE_BUTTONS}/Google.svg`}
                            alt="google"
                        />
                        Google
                    </button>
                    <button className={styles.socialButtons} style={{ color: "white", backgroundColor: "black" }}>
                        <img
                            src={`${import.meta.env.VITE_BUTTONS}/Apple.svg`}
                            alt="apple"
                        />
                        Apple
                    </button>
                </div>
            </footer>
        </div>
        </AuthWrapper>
    )
}

export default SignInComponent
