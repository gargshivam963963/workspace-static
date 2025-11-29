import styles from "../auth.module.css"
import StepCard from "../StepCard"
import { Form, Input } from "antd"

const VerifyCode = () => {
    const [form] = Form.useForm();
    const handleSubmit = (val) => console.log(("values", val))

    return (
        <StepCard heading="Verify code" subheading="An authentication code has been sent to your email." onClick={() => form.submit()} >
            <Form
                onFinish={handleSubmit}
                layout="vertical"
                form={form}
            >
                <Form.Item
                    name="code"
                    rules={[{ required: true, message: "Please enter the sent code" }]}
                    className={styles.formItem}
                    required={false}
                >
                    <Input.Password className="w_full h_40" placeholder="input password" />
                </Form.Item>
                <section className={styles.verifyWrapper}>
                    <span className={styles.minimessage}>
                        Didn’t receive a code?
                        <span style={{ color: "var(--secondary-color", textDecoration: "underline", textUnderlineOffset: "40%" }}>Resend</span>
                    </span>
                </section>
            </Form>
        </StepCard>
    )
}

export default VerifyCode