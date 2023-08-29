import { useCollection } from 'react-firebase-hooks/firestore';
import styles from './styles.module.scss'
import { db } from '@/services/firebase';
import { MdPerson } from 'react-icons/md';

const getUser = (users, userLogged) =>
    users?.filter((user) => user !== userLogged?.email)[0];

export default function SidebarChatsItem({ id, users, user, setUserChat, active }) {
    const [getUserItem] = useCollection(
        db.collection("users").where("email", "==", getUser(users, user))
    );

    const Avatar = getUserItem?.docs?.[0]?.data();
    const item = getUser(users, user);

    const handleNewChat = () => {
        const userChat = {
            chatId: id,
            name: item.split("@")[0],
            photoURL: Avatar?.photoURL
        };

        setUserChat(userChat);
    }

    return (
        <div
        className={`${styles.container} ${active ? styles.active : ''}`}
            onClick={handleNewChat}
        >
            {Avatar ? <img className={styles.avatar} src={Avatar?.photoURL} /> : <MdPerson />}
            <span className={styles.name}>{item.split("@")}</span>
        </div>
    )
}