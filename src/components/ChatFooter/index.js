import { useAuthState } from 'react-firebase-hooks/auth'
import styles from './styles.module.scss'
import { auth, db } from '@/services/firebase'
import { useState } from 'react'
import { MdSend } from 'react-icons/md'
import { BsCodeSlash, BsCardText } from 'react-icons/bs'
import firebase from 'firebase/compat/app'

export default function ChatFooter({ chatId }) {
    const [user] = useAuthState(auth)
    const [message, setMessage] = useState('')
    const [isCodeMode, setIsCodeMode] = useState(false) // Controla o modo de código

    const toggleCodeMode = () => {
        setIsCodeMode(!isCodeMode)
    }

    const handleSendMessage = (e) => {
        e.preventDefault();

        if (message.trim() !== '') {
            db.collection("chats").doc(chatId).collection("messages").add({
                message: message,
                user: user.email,
                photoURL: user.photoURL,
                isCode: isCodeMode, // Adiciona uma propriedade para indicar se é código
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            setMessage("");
            setIsCodeMode(false); // Volta para o modo de texto normal após o envio
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSendMessage}>
                <input
                    className={styles.input}
                    placeholder={isCodeMode ? 'Código' : 'Mensagem'}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button
                    className={styles.button}
                    type="submit"
                >
                    <MdSend  className={styles.button}/>
                </button>
                <button
                    className={styles.codeButton}
                    onClick={toggleCodeMode}
                >
                    {isCodeMode ? <BsCardText className={styles.codeButton} /> : <BsCodeSlash className={styles.codeButton} />}
                </button>
            </form>
        </div>
    )
}
