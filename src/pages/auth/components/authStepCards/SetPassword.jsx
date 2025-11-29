import styles from "../auth.module.css"
import StepCard from "../StepCard"
import { Form, Input } from "antd"

const SetPassword = () => {
    const [form] = Form.useForm();
    const handleSubmit = (val) => console.log(("values", val))

    return (
        <StepCard heading="Set a password" subheading="Your previous password has been reseted. Please set a new password for your account." onClick={() => form.submit()} btnText="Save New Password" >
            <Form
                onFinish={handleSubmit}
                layout="vertical"
                form={form}
            >
                <section className={styles.verfiyWrapper}>
                    <Form.Item
                        name="password"
                        label="New Password"
                        rules={[{ required: true, message: "Please enter the new password " }]}
                        className={styles.formItem}
                        required={false}
                    >
                        <Input.Password className="w_full h_40" placeholder="Enter your new Password" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Confirm New Password"
                        rules={[{ required: true, message: "Confirm New Password" }]}
                        className={styles.formItem}
                        required={false}
                    >
                        <Input.Password className="w_full h_40" placeholder="Re-enter your new password" />
                    </Form.Item>
                </section>
            </Form>
        </StepCard>
    )
}

export default SetPassword