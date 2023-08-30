import { MdMessage } from 'react-icons/md'
import styles from './styles.module.scss'


export default function Default() {
    return (
        <div className={styles.container}>
            <MdMessage />
            <h1 className={styles.title}>IFRO CHAT-APP</h1>
            <span className={styles.info}>
                Agora você pode enviar e receber mensagens sem precisar de numero de celular!
            </span>
        </div>
    )
}