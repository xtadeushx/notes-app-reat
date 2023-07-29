

import { Button } from '../common/button/button';
import { TableHeader } from './components/table-header/table-header';
import { TableList } from './components/table-list/table-list';
import styles from './notes-table.module.scss';

const NotesTable: React.FC = () => {
  return (
    <div className={styles.table}>
      <TableHeader />
      <TableList />
      <Button type='button' className={styles.add__note}>
        Create note
      </Button>
    </div>
  )
}

export { NotesTable }