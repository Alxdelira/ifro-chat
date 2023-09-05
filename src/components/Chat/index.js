import ChatBody from '../ChatBody'
import ChatFooter from '../ChatFooter'
import ChatHeader from '../ChatHeader'
import Default from '../Default'
import styles from './styles.module.scss'

export default function Chat({ userChat }) {
    if (!userChat) return <Default />

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
