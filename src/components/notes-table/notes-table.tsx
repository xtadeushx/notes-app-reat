

import { Button } from '../common/button/button';
import { TableHeader } from './components/table-header/table-header';
import { TableList } from './components/table-list/table-list';
import styles from './notes-table.module.scss';

interface INoteTable {
  handelOpen: () => void;
}

const NotesTable: React.FC<INoteTable> = ({ handelOpen }) => {
  return (
    <div className={styles.table}>
      <TableHeader />
      <TableList />
      <Button type='button' className={styles.add__note} onClick={handelOpen}>
        Create note
      </Button>
    </div>
  )
}

export { NotesTable }