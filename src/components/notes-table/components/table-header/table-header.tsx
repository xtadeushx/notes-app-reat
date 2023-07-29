import deleteIcon from '../../../../assets/delete.png';
import archiveIcon from '../../../../assets/archive.png';
import styles from './table-header.module.scss';
import { Button } from '../../../common/button/button';

const TableHeader: React.FC = () => {
  return (
    <div className={styles.table__header}>
      <p className={styles.header__description}>Name</p>
      <p className={styles.header__description}>Created</p>
      <p className={styles.header__description}>Category</p>
      <p className={styles.header__description}>Content</p>
      <p className={styles.header__description}>Dates</p>
      <div className={styles.buttons__wrapper}>
        <Button type="button" className='button--light'>
          <img src={deleteIcon} alt="" />
        </Button>
        <Button type="button" className='button--light'>
          <img src={archiveIcon} alt="" />
        </Button>
      </div>
    </div>
  );
};

export { TableHeader };
