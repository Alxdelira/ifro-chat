import { useAuthState } from 'react-firebase-hooks/auth'
import styles from './styles.module.scss'
import { auth } from '@/services/firebase'


export default function Message({ user, message }) {
    const [userLoggedIn] = useAuthState(auth)
    return (
        <div>
            <div className={`${styles.line} ${userLoggedIn?.email === user ? styles.me : ""}`}>
                <div className={styles.content}>
                    <span className={styles.message}>{message.message}</span>
                    <span className={styles.messageDate}>
                        {new Date(message?.timestamp).toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    )
}