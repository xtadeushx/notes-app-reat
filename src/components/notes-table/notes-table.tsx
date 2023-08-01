import classNames from 'classnames';
import styles from './notes-table.module.scss';

interface INoteTable {
  children: React.ReactElement;
  isSummaryTable: boolean;
}

const NotesTable: React.FC<INoteTable> = ({ children, isSummaryTable }) => {
  return (
    <div
      className={classNames({
        [styles.table]: true,
        [styles.table__summary]: isSummaryTable,
      })}
    >
      {children}
    </div>
  );
};

export { NotesTable };
