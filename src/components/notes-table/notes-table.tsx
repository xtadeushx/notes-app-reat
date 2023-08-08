import classNames from 'classnames';

interface INoteTable {
  children: React.ReactElement;
  isSummaryTable: boolean;
}

const NotesTable: React.FC<INoteTable> = ({ children, isSummaryTable }) => {
  return (
    <div
      className={classNames({
        'w-full mt-[50px] mb-[20px]': true,
        'text-black': isSummaryTable,
      })}
    >
      {children}
    </div>
  );
};

export { NotesTable };
