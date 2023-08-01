import deleteIcon from '../../../../assets/delete.png';
import archiveIcon from '../../../../assets/archive.png';
import styles from './table-header.module.scss';
import { Button } from '../../../common/button/button';
import { ButtonsWrapper } from '../../../common/buttons-wrapper/buttons-wrapper';
import { Image } from '../../../common/image/image';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  changeAllNotesStatus,
  deleteAllNotes,
} from '../../../../redux/slices/notes-slice';
import { TStatus } from '../../../../common/types/note.type';
import { NotesStatus } from '../../../../common/enums/notes-status';
import classNames from 'classnames';

interface ITableHeaderProps {
  titleList: string[];
  withButtons: boolean;
}

const TableHeader: React.FC<ITableHeaderProps> = ({
  titleList,
  withButtons,
}) => {
  const [currentStatus, setCurrentStatus] = useState<TStatus>(
    NotesStatus.ARCHIVED
  );
  const dispatch = useDispatch();

  const handelDeleteAllNotes = () => {
    dispatch(deleteAllNotes());
  };
  const handelArchiveAllNotes = () => {
    dispatch(changeAllNotesStatus(currentStatus));
    setCurrentStatus((prev) =>
      prev === NotesStatus.ACTIVE ? NotesStatus.ARCHIVED : NotesStatus.ACTIVE
    );
  };
  return (
    <div
      className={classNames({
        [styles.table__header]: true,
        [styles.header__summary]: !withButtons,
      })}
    >
      {titleList.length > 0 &&
        titleList.map((el) => {
          return (
            <p key={el} className={styles.header__description}>
              {el}
            </p>
          );
        })}
      {withButtons && (
        <ButtonsWrapper>
          <Button
            type="button"
            className="button--light"
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
      )}
    </div>
  );
};

export { TableHeader };
