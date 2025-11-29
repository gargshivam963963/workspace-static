import styles from "./FormWrapper.module.css";
import BackPageArrowButton from "../../components/authComponents/BackPageArrowButton";
import ForgotPassword from "./components/authStepCards/ForgotPassword";
import { useLocation, useParams } from "react-router-dom";
import AcceptInvitation from "./components/authStepCards/AcceptInvitation";
import AlmostThere from "./components/AlmostThere/AlmostThere";
import WorkspaceDomain from "../WorkspaceSetup/WorkspaceDomain/WorkspaceDomain";
import CompletePayment from "../WorkspaceSetup/CompletePayment/CompletePayment";

const FormWrapper = () => {
    const { formName } = useParams();
    const { pathname } = useLocation();

    const childMapper = {
        // "forgot-password": <ForgotPassword />,
        "almost-there": <AlmostThere />,
        "workspace-domain": <WorkspaceDomain />,
        "complete-payment": <CompletePayment />,
        // "verify-code": <VerifyCode />,
        // "set-password": <SetPassword />,
        // "set-new-password": <SetNewPassword />,
        // add more as needed...
    };

    const isAcceptInviteRoute = pathname.startsWith("/auth/accept-invite");

    return (
        <div className={styles.contianer}>
            {!isAcceptInviteRoute && (
                <section style={{ width: "100%" }}>
                    <BackPageArrowButton />
                </section>
            )}

            {isAcceptInviteRoute ? (<AcceptInvitation />) : (childMapper[formName] || <div>Form not found</div>)}
        </div>
    );
};

export default FormWrapper;
