import { useNavigate } from "react-router-dom";
import styles from "./BackPageArrowButton.module.css";



const BackPageArrowButton = ({ heading = "", onClick = null, showBackIcon = true }) => {
    const navigate = useNavigate();

    return <>
        {showBackIcon && <img
            className={styles.leftOutlinedArrow}
            onClick={onClick ? onClick : () => navigate(-1)}
            src={`${import.meta.env.VITE_CDN_BASE}/button/back_arrow_button`}
            alt="back_arrow_button"
        />}

        {heading}
    </>
}

export default BackPageArrowButton;