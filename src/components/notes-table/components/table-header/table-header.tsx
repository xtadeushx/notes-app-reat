import deleteIcon from '../../../../assets/delete.png';
import archiveIcon from '../../../../assets/archive.png';
import styles from './table-header.module.scss';
import { Button } from '../../../common/button/button';
import { ButtonsWrapper } from '../../../common/buttons-wrapper/buttons-wrapper';
import Image from '../../../common/image/image';

const TableHeader: React.FC = () => {
  return (
    <div className={styles.table__header}>
      <p className={styles.header__description}>Name</p>
      <p className={styles.header__description}>Created</p>
      <p className={styles.header__description}>Category</p>
      <p className={styles.header__description}>Content</p>
      <p className={styles.header__description}>Dates</p>

      <ButtonsWrapper>
        <Button type="button" className='button--light'>
          <Image
            alt='delete icon'
            src={deleteIcon}
          />
        </Button>
        <Button type="button" className='button--light'>
          <Image
            alt='archive icon'
            src={archiveIcon}
          />
        </Button>
      </ButtonsWrapper>
    </div>
  );
};

export { TableHeader };
