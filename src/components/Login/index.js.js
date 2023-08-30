// Login.js

import { auth, provider } from "@/services/firebase";
import styles from "./styles.module.scss";
import { MdMessage } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const handleSignin = async () => {
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MdMessage />
        <div className={styles.title}>Bem-vindo(a) à Nossa Plataforma</div>
        <div className={styles.subtitle}>Faça login para continuar</div>
        <button className={styles.button} onClick={handleSignin}>
          <FcGoogle/>Entrar com o Google
        </button>
      </div>
    </div>
  );
}
