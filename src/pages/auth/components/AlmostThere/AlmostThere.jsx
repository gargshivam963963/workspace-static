import { Button, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import styles from "./AlmostThere.module.css";

const { Title, Paragraph } = Typography;

const AlmostThere = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Title level={2} className={styles.title}>
                    Almost there!
                </Title>

                <Paragraph className={styles.subtitle}>
                    Open your email and follow the link to complete your
                    account activation.
                </Paragraph>

                <Button
                    type="primary"
                    size="large"
                    className={styles.actionBtn}
                    onClick={() => window.open("https://gmail.com", "_blank")}
                >
                    Go to Email <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    );
};

export default AlmostThere;