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

  const refBody = useRef('');

  useEffect(() => {
    if (refBody.current.scrollHeith > refBody.current.offsetHeigth) {
      refBody.current.scrollTop =
        refBody.current.scrollHeith - refBody.current.offsetHeigth;
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
            timestamp: message.data().timestamp?.toDate().getTime()
          }}
        />
      ))}


    </div>
  )
}