import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Note App</h2>
    </header>
  );
};

export { Header };
