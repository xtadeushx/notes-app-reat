import { useSelector } from 'react-redux';
import { TableItem } from '../table-item/table-item';
import styles from './table-list.module.scss';
import { RootState } from '../../../../redux/store';

const TableList: React.FC = () => {
  const { notesList } = useSelector((state: RootState) => state.notes)

  return (
    <ul className={styles.table__list}>
      {
        (notesList && notesList.length > 0)
          ?
          (notesList.map(note => {
            return <TableItem key={note.id} {...note} />

          }))
          :
          <p>Your list of notes are empty. PLease add New NOTES</p>
      }
    </ul>
  )
}

export { TableList };