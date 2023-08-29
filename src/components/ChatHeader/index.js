import { MdMoreVert, MdPerson, MdSearch } from 'react-icons/md'
import styles from './styles.module.scss'

export default function ChatHeader({ photoURL, name }) {
    return (
        <div className={styles.container}>
            <div className={styles.user_info}>
                {photoURL ? <img className={styles.avatar} src={photoURL} alt='Avatar'/> : <MdPerson />}
                <div className={styles.content}>
                    <span className={styles.name}>{name}</span>
                </div>
            </div>
            <div className={styles.option}>
                <MdSearch />
                <MdMoreVert />
            </div>
        </div>
    )
}