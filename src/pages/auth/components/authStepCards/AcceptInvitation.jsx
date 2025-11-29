import { useCallback, useEffect, useState } from "react";
import styles from "../auth.module.css"
import StepCard from "../StepCard"
import { Form, Input } from "antd"
import { useParams } from "react-router-dom";
import Axios from "../../../../utils/AxiosCall";

const AcceptInvitation = () => {
    const [form] = Form.useForm();
    const [inviteData, setInviteData] = useState(null);
    const { token1, token2, token3 } = useParams();

    const handleSubmit = async val => {
        const password = val.password;

        try {
            const res = await Axios.post(`/accept-invite/${token1}/${token2}/${token3}/`, {
                "password": password,
            });

            if (res.data.success) {
                window.location.href = 'https://pmg.engineering/signin/';
            }
            else {
                console.warn("an error while handling post")
            }

        } catch (err) {
            console.warn("an error while handling submit");
        }
    }

    const getDecryptedData = useCallback(async () => {
        if (!token1 || !token2 || !token3) return;
        try {
            const res = await Axios.get(`/accept-invite/${token1}/${token2}/${token3}/`);
            setInviteData(res.data);
        } catch (err) {
            console.warn("Error while accept invite", err.message);
        }
    }, [token1, token2, token3])

    useEffect(() => {
        if (token1 && token2 && token3) getDecryptedData();
    }, [token1, token2, token3, getDecryptedData]);

    return (
        <StepCard
            heading="Accept Invitation"
            subheading={`You have been invited to ${inviteData?.workspace_name} Workspace. Create password for your account to complete the account creation`}
            onClick={() => form.submit()}
            btnText="Save Password" >
            <Form
                onFinish={handleSubmit}
                layout="vertical"
                form={form}
            >
                <section className={styles.verifyWrapper}>
                    <div className={styles.emailDisplay}>
                        Email ID:
                        <span className={styles.minimessage}>{inviteData?.email}</span>
                    </div>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: "Please enter the password" }]}
                        className={styles.formItem}
                        required={false}
                    >
                        <Input.Password className="w_full h_40" placeholder="Enter your Password" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="Confirm New Password"
                        rules={[{ required: true, message: "Confirm Password" }]}
                        className={styles.formItem}
                        required={false}
                    >
                        <Input.Password className="w_full h_40" placeholder="Re-enter your password" />
                    </Form.Item>
                </section>
            </Form >
        </StepCard >
    )
}

export default AcceptInvitation