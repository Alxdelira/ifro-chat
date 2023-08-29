import styles from './styles.module.scss';

export default function Loading() {

  return (
    <div className={styles.loading_container}>
      <div className={styles.spinner}></div>
    </div>
  );
}