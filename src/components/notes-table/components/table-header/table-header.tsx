import deleteIcon from '../../../../assets/delete.png';
import archiveIcon from '../../../../assets/archive.png';
import styles from './table-header.module.scss';
import { Button } from '../../../common/button/button';
import { ButtonsWrapper } from '../../../common/buttons-wrapper/buttons-wrapper';
import { Image } from '../../../common/image/image';
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { changeAllNotesStatus, deleteAllNotes } from '../../../../redux/slices/notes-slice';
import { TStatus } from '../../../../common/types/note.type';
import { NotesStatus } from '../../../../common/enums/notes-status';



const TableHeader: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState<TStatus>(NotesStatus.ARCHIVED)
  const dispatch = useDispatch();

  const handelDeleteAllNotes = () => {
    dispatch(deleteAllNotes());
  };
  const handelArchiveAllNotes = () => {
    dispatch(changeAllNotesStatus(currentStatus));
    setCurrentStatus(prev => prev === NotesStatus.ACTIVE ? NotesStatus.ARCHIVED : NotesStatus.ACTIVE);
  };
  return (
    <div className={styles.table__header}>
      <p className={styles.header__description}>Name</p>
      <p className={styles.header__description}>Created</p>
      <p className={styles.header__description}>Category</p>
      <p className={styles.header__description}>Content</p>
      <p className={styles.header__description}>Dates</p>

      <ButtonsWrapper>
        <Button type="button" className="button--light"
          onClick={handelArchiveAllNotes}
        >
          <Image alt="archive icon" src={archiveIcon} />

        </Button>
        <Button
          type="button"
          className="button--light"
          onClick={handelDeleteAllNotes}
        >
          <Image alt="delete icon" src={deleteIcon} />
        </Button>
      </ButtonsWrapper>
    </div>
  );
};

export { TableHeader };
