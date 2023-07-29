import { Button } from "../../../common/button/button"
import editingIcon from '../../../../assets/editing.png'
import archiveIcon from '../../../../assets/archive.png'
import deleteIcon from '../../../../assets/delete.png'
import styles from './table-item.module.scss'
import clsx from "clsx"
import { ButtonsWrapper } from "../../../common/buttons-wrapper/buttons-wrapper"
type TTableItemProps = {
  src: string,
  title: string,
  createdAt: string,
  category: string,
  content: string[],
  dates: string[],
  status?: 'active' | 'archived',
}

const TableItem: React.FC<TTableItemProps> = ({ title, category, content, dates, src, createdAt }) => {
  return (
    <li className={styles.item}>

      <div className={styles.img__container}>
        <span className={styles.img__wrapper}>
          <img width={30}
            className={clsx(styles.item__img, 'button--light')}
            src={src}
            alt={category} />
        </span>
        <span className={styles.item__title}>{title}</span>
      </div>
      <p className="item__createdAt">{createdAt}</p>
      <p className={styles.item__category}>{category}</p>
      <p className={styles.item__content}>{content.join(' ,')}</p>
      <p className="item__dates">{dates.join(' ,')}</p>

      <ButtonsWrapper>
        <Button type="button">
          <img src={editingIcon} alt="editingIcon" />
        </Button>
        <Button type="button">
          <img src={archiveIcon} alt="archiveIcon" />
        </Button>
        <Button type="button">
          <img src={deleteIcon} alt="deleteIcon" />
        </Button>
      </ButtonsWrapper>

    </li>
  )
}

export { TableItem }