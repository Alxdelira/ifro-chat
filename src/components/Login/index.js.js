import { auth, provider } from "@/services/firebase";
import styles from "./styles.module.scss";

export default function Login() {
    // Função para realizar o login com o Google
    const handleSignin = async () => {
        try {
            // Realiza o login com o Google
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleSignin}>Login com Google</button>
        </div>
    );
};