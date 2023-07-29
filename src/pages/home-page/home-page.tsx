import { NotesTable } from '../../components/notes-table/notes-table';

import styles from './home-page.module.scss';

const HomePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <NotesTable />
      </div>
    </main>
  )
}

export { HomePage }