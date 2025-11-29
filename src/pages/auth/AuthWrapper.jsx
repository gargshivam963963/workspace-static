import styles from "./AuthWrapper.module.css"

const AuthWrapper = ({ children }) => {
    const s3BucketUrl = import.meta.env.VITE_BUCKET_NAVBAR_ICONS;
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <section className={styles.sideText}>
                    <div className={styles.pair}>
                        <img className={styles["pmg-logo"]} width={170} height={40} src={`${s3BucketUrl}workspace_logo.svg`} alt="Workspace Logo" />
                        <p className={styles.hugeText}>
                            Sign in to your workspace — projects, teams, and tasks all in one place.
                        </p>
                    </div>
                    <p>Powered by <span style={{ textDecoration: "underline", textUnderlineOffset: "40%" }}>PMG Engineering</span></p>
                </section>
                <section className={styles.rightBar}>
                    {/* <SignInComponent /> */}
                    {children}
                    <p className={styles.terms}>
                        By clicking "Sign In" or "Continue with Google / Apple" I agree to PMG Engineering's&nbsp;
                        <span style={{ textDecoration: "underline", textUnderlineOffset: "20%" }}>{"Terms of use"}</span>
                        &nbsp;and&nbsp;
                        <span style={{ textDecoration: "underline", textUnderlineOffset: "20%" }}>{"Privacy Policy."}</span>
                    </p>
                </section>
            </div>
        </div>
    )
}
export default AuthWrapper