import { useNavigate } from "react-router-dom";
import styles from "../modules/Logo.module.css";
import LogoImg from "/logo.png";

function Logo() {
  const navigate = useNavigate();
  return (
    <button className={styles.logo} onClick={() => navigate("/")}>
      <img className={styles.logoImg} src={LogoImg} alt="Esut Logo" />
    </button>
  );
}

export default Logo;
