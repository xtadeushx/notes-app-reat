

import { Button } from '../common/button/button';
import { TableHeader } from './components/table-header/table-header';
import { TableList } from './components/table-list/table-list';
import styles from './notes-table.module.scss';

interface INoteTable {
  handelOpen: () => void;
  handelMode: (mode: 'edit' | 'create') => void;
}

const NotesTable: React.FC<INoteTable> = ({ handelOpen, handelMode }) => {
  return (
    <div className={styles.table}>
      <TableHeader />
      <TableList handelMode={handelMode} handelOpen={handelOpen} />
      <Button type='button' className={styles.add__note} onClick={() => {
        handelOpen();
        handelMode('create');
      }} >
        Create note
      </Button>
    </div>
  )
}

export { NotesTable }