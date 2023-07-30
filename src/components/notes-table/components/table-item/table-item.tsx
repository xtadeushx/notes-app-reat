import clsx from 'clsx';
import classNames from 'classnames';

import { useDispatch } from 'react-redux';
import {
  changeNoteStatus,
  deleteNote,
} from '../../../../redux/slices/notes-slice';

import { Button } from '../../../common/button/button';
import { ButtonsWrapper } from '../../../common/buttons-wrapper/buttons-wrapper';
import { Image } from '../../../common/image/image';

import editingIcon from '../../../../assets/editing.png';
import archiveIcon from '../../../../assets/archive.png';
import deleteIcon from '../../../../assets/delete.png';

import styles from './table-item.module.scss';
import { NotesStatus } from '../../../../common/enums/notes-status';
type TTableItemProps = {
  id: number;
  src: string;
  title: string;
  createdAt: string;
  category: string;
  content: string[];
  dates: string[];
  status?: 'active' | 'archived';
  handelMode: (mode: 'edit' | 'create') => void;
  handelOpen: () => void;

};

const TableItem: React.FC<TTableItemProps> = ({
  title,
  category,
  content,
  dates,
  src,
  createdAt,
  id,
  status,
  handelMode,
  handelOpen
}) => {
  const dispatch = useDispatch();
  const handleDeleteItem = (id: number) => dispatch(deleteNote(id));
  const handelNoteStatus = (id: number) => dispatch(changeNoteStatus(id));
  const handelEditItem = () => {
    handelMode('edit');
    handelOpen();
  };

  return (
    <li
      className={classNames({
        [styles.item]: true,
        [styles.item__archived]: status === NotesStatus.ARCHIVED,
      })}
    >
      <div className={styles.img__container}>
        <span className={styles.img__wrapper}>
          <Image
            src={src}
            alt={category}
            width={30}
            className={clsx(styles.item__img, 'button--light')}
          />
        </span>
        <span className={styles.item__title}>{title}</span>
      </div>
      <p className="item__createdAt">{createdAt}</p>
      <p className={styles.item__category}>{category}</p>
      <p className={styles.item__content}>{content.join(' ,')}</p>
      <p className="item__dates">{dates.join(' ,')}</p>

      <ButtonsWrapper>
        <Button type="button" onClick={handelEditItem}>
          <Image alt="editing icon" src={editingIcon} />
        </Button>
        <Button type="button" onClick={() => handelNoteStatus(id)}>
          <Image alt="archive icon" src={archiveIcon} />
        </Button>
        <Button type="button" onClick={() => handleDeleteItem(id)}>
          <Image alt="delete icon" src={deleteIcon} />
        </Button>
      </ButtonsWrapper>
    </li>
  );
};

export { TableItem };
