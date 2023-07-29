

import { TableHeader } from './components/table-header/table-header';
import styles from './notes-table.module.scss';

const NotesTable: React.FC = () => {
  return (
    <div className={styles.table}>
      <TableHeader />
    </div>
  )
}

export { NotesTable }