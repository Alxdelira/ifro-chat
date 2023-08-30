import { useAuthState } from 'react-firebase-hooks/auth'
import styles from './styles.module.scss'
import { auth, db } from '@/services/firebase'
import { useState } from 'react'
import { MdSend } from 'react-icons/md'
import firebase from 'firebase/compat/app'

export default function ChatFooter({ chatId }) {

    const [user] = useAuthState(auth)
    const [message, setMessage] = useState('')
    const handleSendMessage = (e) => {
        e.preventDefault();

        db.collection("chats").doc(chatId).collection("messages").add({
            message: message,
            user: user.email,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setMessage("");
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSendMessage}>
                <input
                    className={styles.input}
                    placeholder='Menssagem'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <MdSend />
            </form>
        </div>
    )
}