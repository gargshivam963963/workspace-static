import { useState, useRef } from "react";
import { Form, Input, Upload, Button, Typography, message, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import styles from "./WorkspaceDomain.module.css";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const WorkspaceDomain = () => {
    const [form] = Form.useForm();
    const [domainName, setDomainName] = useState("");
    const [loading, setLoading] = useState(false);
    const [available, setAvailable] = useState(null);
    const navigate = useNavigate();

    const debounceRef = useRef(null);

    // ⭐ Debounced API Call
    const checkDomain = async (value) => {
        setLoading(true);

        try {
            const res = await axios.get(
                `https://pmg.engineering/check-domain/?subdomain=${value}`
            );

            setAvailable(res.data.status); // "available" or "not-available"
        } catch (error) {
            console.error(error);
            setAvailable(null);
            message.error("Something went wrong while checking domain");
        } finally {
            setLoading(false);
        }
    };

    const handleDomainChange = (e) => {
        const v = e.target.value;

        setDomainName(v);
        setAvailable(null); // reset availability while typing

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        // ⭐ 2 seconds delay before calling API
        debounceRef.current = setTimeout(() => {
            if (v.length >= 3) {
                checkDomain(v);
            }
        }, 1000);
    };

    const onFinish = (values) => {
        console.log("Form Values:", values);
        localStorage.setItem("workspace_domain", domainName);
        navigate("/auth/complete-payment");
        // Proceed to next step, e.g., navigate to payment page
    }

    return (
        <div className={styles.container}>
            <Title level={2} className={styles.title}>
                Set up your workspace domain
            </Title>

            <Paragraph className={styles.subtitle}>
                Select a custom domain where your team will log in and manage all workspace activities.
            </Paragraph>

            {/* Workspace domain preview */}
            <div className={styles.domainBox}>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className={styles.avatar}
                />
                <div>
                    <p className={styles.domainLabel}>Your WorkSpace will be</p>
                    <p className={styles.domainValue}>
                        {domainName || "your-domain"}.pmg.engineering
                    </p>
                </div>
            </div>

            <Form layout="vertical" onFinish={onFinish} form={form} className={styles.form}>
                <Form.Item
                    name="workspace"
                    label="Workspace Name"
                    rules={[
                        { required: true, message: "Workspace name is required" },
                        {
                            pattern: /^[a-z0-9-]{3,20}$/,
                            message:
                                "Use 3–20 characters. Lowercase letters, numbers, hyphens only"
                        }
                    ]}
                    required={false}
                >
                    <Input
                        placeholder="Enter workspace name"
                        className={styles.input}
                        onChange={handleDomainChange}
                    />
                </Form.Item>

                {/* Upload Logo */}
                <Form.Item label="Upload Logo (Optional)" name="logo" >
                    <Upload beforeUpload={() => false} fileList={[]}>
                        <Button icon={<UploadOutlined />} style={{ width: "100%" }} className="ljsdfklsdjklfjlj">
                            Upload
                        </Button>
                    </Upload>
                </Form.Item>

                {available === "available" && (
                    <p className={styles.available}>
                        ✓ {domainName}.pmg.engineering workspace is available.
                    </p>
                )}

                {available === "not-available" && (
                    <p className={styles.notAvailable}>
                        ✗ Domain is already taken. Try another.
                    </p>
                )}

                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.continueBtn}
                    disabled={available !== "available" || loading}
                >
                    Continue
                </Button>
            </Form>

            <Paragraph className={styles.infoText}>
                Use 3–20 characters. Only lowercase letters, numbers, and hyphens allowed.
            </Paragraph>
        </div>
    );
};

export default WorkspaceDomain;