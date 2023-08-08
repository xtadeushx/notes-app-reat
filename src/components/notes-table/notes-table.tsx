import classNames from 'classnames';

interface INoteTable {
  children: React.ReactElement;
  isSummaryTable: boolean;
}

const NotesTable: React.FC<INoteTable> = ({ children, isSummaryTable }) => {
  return (
    <div
      className={classNames({
        'w-full mt-[10px] mb-[10px]': true,
        'text-black': isSummaryTable,
      })}
    >
      {children}
    </div>
  );
};

export { NotesTable };
