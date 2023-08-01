import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <a
          href="https://github.com/xtadeushx/notes-app"
          target="_blank"
          className={styles.footer__link}
        >
          @ xtadeushx 2023
        </a>
      </div>
    </footer>
  );
};

export { Footer };
