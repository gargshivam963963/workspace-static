import styles from "../auth.module.css"
import StepCard from "../StepCard"
import { Form } from "antd"
import InputComponent from "../../../../components/authComponents/Input"

const ForgotPassword = () => {
    const [form] = Form.useForm();
    const handleSubmit = (val) => console.log(("values", val))

    return (
        <StepCard heading="Forgot your Password?" subheading="Enter the email linked to your account to reset your password." onClick={() => form.submit()} >
            <Form
                onFinish={handleSubmit}
                layout="vertical"
                form={form}
            >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: "Please enter email" }]}
                    className={styles.formItem}
                    required={false}
                >
                    <InputComponent className={"w-full  h_40"} placeholder={"Enter Email ID"} />
                </Form.Item>
            </Form>
        </StepCard>
    )
}

export default ForgotPassword