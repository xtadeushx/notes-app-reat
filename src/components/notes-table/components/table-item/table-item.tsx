import { Button } from '../../../common/button/button';
import editingIcon from '../../../../assets/editing.png';
import archiveIcon from '../../../../assets/archive.png';
import deleteIcon from '../../../../assets/delete.png';
import styles from './table-item.module.scss';
import clsx from 'clsx';
import { ButtonsWrapper } from '../../../common/buttons-wrapper/buttons-wrapper';
import Image from '../../../common/image/image';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../../../redux/slices/notes-slice';
type TTableItemProps = {
  id: number;
  src: string;
  title: string;
  createdAt: string;
  category: string;
  content: string[];
  dates: string[];
  status?: 'active' | 'archived';
};

const TableItem: React.FC<TTableItemProps> = ({
  title,
  category,
  content,
  dates,
  src,
  createdAt,
  id,
}) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (id: number) => {
    console.log('handleDeleteItem');
    dispatch(deleteNote(id));
  };
  return (
    <li className={styles.item}>
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
        <Button type="button">
          <Image alt="editing icon" src={editingIcon} />
        </Button>
        <Button type="button">
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
