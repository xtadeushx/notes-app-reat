import { TableItem } from '../table-item/table-item';
import styles from './table-list.module.scss';
import { DATA } from '../../../../model/data';

const TableList: React.FC = () => {
  const NOTES = DATA
  return (
    <ul className={styles.table__list}>
      {
        (NOTES && NOTES.length > 0)
          ?
          (NOTES.map(note => {
            return <TableItem key={note.id} {...note} />

          }))
          :
          <p>Your list of notes are empty. PLease add New NOTES</p>
      }
    </ul>
  )
}

export { TableList };