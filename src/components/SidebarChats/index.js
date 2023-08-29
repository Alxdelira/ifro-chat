import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './styles.module.scss';
import { auth, db } from '@/services/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import SidebarChatsItem from '../SidebarChatsItem';


export default function SidebarChats({ setUserChat, userChat }) {
    const [user] = useAuthState(auth);

    const refChat = db
        .collection("chats")
        .where("users", "array-contains", user.email);
    const [chatsSnapshot] = useCollection(refChat)
    return (
        <div className={styles.container}>
            {chatsSnapshot?.docs.map((item, index) => (
                <div className={styles.content} key={index}>
                    <SidebarChatsItem
                        id={item.id}
                        users={item.data().users}
                        user={user}
                        setUserChat={setUserChat}
                        active={userChat?.chatId === item.id ? "active" : ""}
                    />
                    <div className={styles.divider}></div>
                </div>
            ))}
        </div>
    );
}