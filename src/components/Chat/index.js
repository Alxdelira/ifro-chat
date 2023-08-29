import ChatBody from '../ChatBody'
import ChatFooter from '../ChatFooter'
import ChatHeader from '../ChatHeader'
import styles from './styles.module.scss'

export default function Chat({ userChat }) {
    return (
        <>
            <div className={styles.container}>
                <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
                <ChatBody chatId={userChat?.chatId} />
                <ChatFooter chatId={userChat?.chatId} />
            </div>
        </>
    )
}