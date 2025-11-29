import { Button } from "antd";
import styles from "./auth.module.css";

const StepCard = ({ heading = "", subheading = "", btnText = "", onClick, children }) => {
    return (
        <div className={styles.stepCard}>
            <section className={styles.pair}>
                <div className={styles.heading}>{heading}</div>
                {subheading && <div className={styles.subheading}>{subheading}</div>}
            </section>

            {children}

            <footer className={styles.footer}>
                <Button onClick={onClick} style={{ width: "100%" }} className="h_44" type="primary">{btnText ? btnText : "Submit"}</Button>
            </footer>
        </div>
    )
}

export default StepCard;