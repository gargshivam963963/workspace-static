import { useEffect } from "react";
import styles from "./WorkspaceDomain.module.css";
import Axios from "../../../utils/AxiosCall";

const WorkspaceDomain = () => {
    const payload = {
        subdomain: "oshanktets"
    };

    const getData = async () => {
        try {
            const response = await Axios.get(
                "https://pmg.engineering/apis/check-domain/",
                { params: payload }
            );
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Set up your workspace domain</h2>
            <p className={styles.subtitle}>
                Select a custom domain where your team will log in and manage all workspace activities.
            </p>

            <div className={styles.domainBox}>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className={styles.avatar}
                />
                <div>
                    <p className={styles.domainLabel}>Your WorkSpace will be</p>
                    <p className={styles.domainValue}>sachin2.pmg.engineering</p>
                </div>
            </div>

            <label className={styles.label}>Workspace Name</label>
            <input type="text" className={styles.input} placeholder="Enter Name" />

            <label className={styles.label}>Upload Logo (Optional)</label>

            <div className={styles.uploadBox}>
                <span className={styles.uploadIcon}>⬆</span>
                <span>Upload logo</span>
            </div>

            <p className={styles.available}>
                ✓ sachin2.pmg.engineering workspace is available.
            </p>

            <button className={styles.continueBtn}>Continue</button>

            <p className={styles.infoText}>
                Use 3–20 characters. Only lowercase letters, numbers, and hyphens allowed.
            </p>
        </div>
    );
};

export default WorkspaceDomain;