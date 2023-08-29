import SidebarChats from '../SidebarChats';
import SidebarHeader from '../SidebarHeader';
import styles from './styles.module.scss';


export default function Sidebar({setUserChat, userChat}) {
    return (
        <div className={styles.container}>
            <SidebarHeader setUserChat={setUserChat} />
            <SidebarChats setUserChat={setUserChat} userChat={userChat} />
        </div>
    );
}