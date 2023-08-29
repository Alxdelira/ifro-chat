import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '@/services/firebase'
import Login from '@/components/Login/index.js'
import Loading from '@/components/Loading'
import Sidebar from '@/components/Sidebar'
import styles from '@/styles/home.module.scss'
import Chat from '@/components/Chat'

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set(
        {
          email: user.email,
          photoURL: user.photoURL,
        })
    }
  }, [user]);
  if (loading) return <Loading />
  if (!user) return <Login />
  return (
    <>
    <main className={styles.container}>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chat  userChat={userChat}/>
    </main>
    </>
  )
}
