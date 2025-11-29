import { Button, Col, Form, Input, Row, message } from "antd";
import styles from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../utils/AxiosCall";
import AuthWrapper from "../AuthWrapper";

//   const [messageApi, contextHolder] = message.useMessage();

const SignUpComponent = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleSubmit = async (val) => {
        try {
            const payload = {
                f_name: "shivam 1",
                l_name: "Garg",
                email: "shivamgarg.pmgeng@gmail.com",
                pass1: "12345678",
                pass2: "12345678",
            };

            const res = await Axios.post("https://pmg.engineering/apis/signup/", payload);

            if (res.status === 201) {
                navigate("/auth/almost-there");
            }
        } catch (error) {
            if (error.status === 400) {
                console.log(error.response.data.username[0].message);
                // navigate("/auth/almost-there");

                message.error("An account with this email already exists. Please use a different email to sign up.");
            } else if (error.status === 500) {
                message.error("Something went wrong. Please try again later.");
            }
        }
    }

    return (
        <AuthWrapper>
            <div className={styles.authForm}>
                <section>
                    <header className={styles.headingBold}>Sign Up</header>
                </section>

                <Form
                    onFinish={handleSubmit}
                    layout="vertical"
                    form={form}
                    className="main"
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="f_name"
                                label="First Name"
                                className="form"
                            // rules={[
                            //     {
                            //         validator: (_, value) => {
                            //             const errorMessage = "Please enter a valid first name (2-50 characters,letters only)"

                            //             if (!value || value.trim() === "") {
                            //                 return Promise.reject(errorMessage);
                            //             }

                            //             if (!/^[A-Za-z]+$/.test(value)) {
                            //                 return Promise.reject(errorMessage);
                            //             }

                            //             if (value.length < 2 || value.length > 50) {
                            //                 return Promise.reject(errorMessage);
                            //             }
                            //             return Promise.resolve();
                            //         }
                            //     }
                            // ]}
                            // required={false}
                            >
                                <Input className="w_full h_40" placeholder="Enter First name" />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="l_name"
                                label="Last Name"
                            // rules={[
                            //     {
                            //         validator: (_, value) => {
                            //             const errorMessage = "Please enter a valid first name (2-50 characters,letters only)"

                            //             if (!value || value.trim() === "") {
                            //                 return Promise.reject(errorMessage);
                            //             }

                            //             if (!/^[A-Za-z]+$/.test(value)) {
                            //                 return Promise.reject(errorMessage);
                            //             }

                            //             if (value.length < 2 || value.length > 50) {
                            //                 return Promise.reject(errorMessage);
                            //             }
                            //             return Promise.resolve();
                            //         }
                            //     }
                            // ]}
                            >
                                <Input className="w_full h_40" placeholder="Enter Last name" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        name="email"
                        label="Email"
                    // rules={[
                    //     {
                    //         validator: (_, value) => {
                    //             const errorMessage = "Please enter a valid first name (2-50 characters,letters only)"

                    //             if (!value || value.trim() === "") {
                    //                 return Promise.reject(errorMessage);
                    //             }

                    //             if (!/^[A-Za-z]+$/.test(value)) {
                    //                 return Promise.reject(errorMessage);
                    //             }

                    //             if (value.length < 2 || value.length > 50) {
                    //                 return Promise.reject(errorMessage);
                    //             }
                    //             return Promise.resolve();
                    //         }
                    //     }
                    // ]}
                    >
                        <Input className="w_full h_40" placeholder="Enter Email ID" />
                    </Form.Item>

                    <Form.Item
                        name="pass1"
                        label="Password"
                    // rules={[{ required: true, message: "Enter New Password" }]}
                    // required={false}
                    >
                        <Input.Password style={{ fontsize: 50 }} placeholder="Enter password" />
                    </Form.Item>

                    <Form.Item
                        name="pass2"
                        label="Confirm Password"
                    // rules={[{ required: true, message: "Re-enter Password" }]}
                    // required={false}
                    >
                        <Input.Password className="w_full h_40" placeholder="Confirm password" />
                    </Form.Item>

                    <Button style={{ width: "100%", marginTop: "40px" }}
                        className="submit_btn"
                        type="primary"
                        htmlType="submit"
                    >
                        Sign Up
                    </Button>

                    <span className={`${styles.minimessage}`} style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}>
                        Already have an account?
                        {/* <span style={{ color: "var(--secondary-color", textDecoration: "underline", textUnderlineOffset: "40%" }}>Sign In</span> */}
                        <Link to="/auth/sign-in">Sign In</Link>
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

export default SignUpComponent;