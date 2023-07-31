

import { CreateMode } from '../../common/enums/enums';
import { TDevelopMode } from '../../common/types/note.type';
import { Button } from '../common/button/button';
import { TableHeader } from './components/table-header/table-header';
import { TableList } from './components/table-list/table-list';
import styles from './notes-table.module.scss';

interface INoteTable {
  handelOpen: () => void;
  handelMode: (mode: TDevelopMode) => void;
  handelId: (id: number) => void;
}

const NotesTable: React.FC<INoteTable> = ({ handelOpen, handelMode, handelId }) => {
  return (
    <div className={styles.table}>
      <TableHeader />
      <TableList handelMode={handelMode} handelOpen={handelOpen} handelId={handelId} />
      <Button type='button' className={styles.add__note} onClick={() => {
        handelOpen();
        handelMode(CreateMode.CREATE);
      }} >
        Create note
      </Button>
    </div>
  )
}

export { NotesTable }