import { useSelector } from 'react-redux';
import { TableItem } from '../table-item/table-item';
import styles from './table-list.module.scss';
import { RootState } from '../../../../redux/store';
import { TDevelopMode } from '../../../../common/types/note.type';

interface ITableListProps {
  handelMode: (mode: TDevelopMode) => void;
  handelOpen: () => void;

}

const TableList: React.FC<ITableListProps> = ({ handelMode, handelOpen }) => {
  const { notesList } = useSelector((state: RootState) => state.notes)

  return (
    <ul className={styles.table__list}>
      {
        (notesList && notesList.length > 0)
          ?
          (notesList.map(note => {
            return <TableItem key={note.id} {...note} handelMode={handelMode} handelOpen={handelOpen} />
          }))
          :
          <p>Your list of notes are empty. PLease add New NOTES</p>
      }
    </ul>
  )
}

export { TableList };