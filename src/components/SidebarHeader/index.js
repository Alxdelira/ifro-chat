import styles from './styles.module.scss';
import { MdDonutLarge, MdChat, MdMoreVert } from 'react-icons/md';
import * as EmailValidator from 'email-validator';
import { auth, db } from '@/services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

export default function SidebarHeader({ setUserChat }) {
    const [user] = useAuthState(auth);
    const refChat = db
        .collection('chats')
        .where('users', 'array-contains', user.email);
    const [chatSnapshot] = useCollection(refChat);

    const handlerCreateChat = () => {
        const emailImput = prompt('Escreva o e-mail do usuário que deseja conversar');

        if (!emailImput) return;

        if (!EmailValidator.validate(emailImput)) {
            return alert('E-mail inválido');
        } else if (emailImput === user.email) {
            return alert('Você não pode enviar mensagens para você mesmo');
        } else if (chatExists(emailImput)) {
            return alert('Você já está conversando com esse usuário');
        }

        db.collection('chats').add({
            users: [user.email, emailImput],
        });
    };

    const chatExists = (emailChat) => {
        return !!chatSnapshot?.docs.find(
            (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0

        );
    };
    return (
        <div className={styles.container}>
            <img
                className={styles.avatar}
                src={user?.photoURL}
                onClick={() => [auth.signOut(), setUserChat(null)]}
                alt="avatar" />
            <div className={styles.option}>
                <MdDonutLarge />
                <MdChat onClick={handlerCreateChat} />
                <MdMoreVert />
            </div>
        </div>

    );
}