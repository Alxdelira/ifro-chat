import { useCollection } from 'react-firebase-hooks/firestore'
import styles from './styles.module.scss'
import { useEffect, useRef } from 'react'
import { db } from '@/services/firebase'
import Message from '../Message';

export default function ChatBody({ chatId }) {

  const [messageRes] = useCollection(
    db
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const refBody = useRef(null); // Corrigido o nome da referência

  useEffect(() => {
    if (refBody.current.scrollHeight > refBody.current.offsetHeight) { // Corrigido scrollHeight e offsetHeight
      refBody.current.scrollTop =
        refBody.current.scrollHeight - refBody.current.offsetHeight;
    }
  }, [messageRes]);

  return (
    <div className={styles.container} ref={refBody}>
      {messageRes?.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime(),
            isCode: message.data().isCode || false, // Verifica se a mensagem é código
          }}
        />
      ))}
    </div>
  )
}
