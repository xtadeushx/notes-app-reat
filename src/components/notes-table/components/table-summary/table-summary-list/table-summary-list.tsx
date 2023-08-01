import classNames from 'classnames';
import styles from './table-summary-list.module.scss';
import { Image } from '../../../../common/image/image';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { IconsSrc } from '../../../../../common/enums/icons-src';
import { countItemsByCategoryStatus } from '../../../../../utils/status-counter';
type IconsSrcType = keyof typeof IconsSrc;

const TableSummaryList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [summary, setSummary] = useState<any[] | []>([]);
  const { notesList } = useSelector((state: RootState) => state.notes);

  useEffect(() => {
    setSummary(countItemsByCategoryStatus(notesList));
  }, [notesList]);

  return (
    <ul className={styles.table__list}>
      {summary &&
        summary.length > 0 &&
        summary.map((note) => {
          return (
            <li
              key={note.category}
              className={classNames({
                [styles.item]: true,
              })}
            >
              <div className={styles.img__container}>
                <span className={styles.img__wrapper}>
                  <Image
                    src={
                      IconsSrc[note.category.toUpperCase() as IconsSrcType] ||
                      IconsSrc.TASK
                    }
                    alt={note.category}
                    width={30}
                    className={clsx(styles.item__img, 'button--light')}
                  />
                </span>
                <span className={styles.item__title}>{note.category}</span>
              </div>
              <p className={styles.item__category}>{note.archived}</p>
              <p className={styles.item__category}>{note.active}</p>
            </li>
          );
        })}
    </ul>
  );
};

export { TableSummaryList };
