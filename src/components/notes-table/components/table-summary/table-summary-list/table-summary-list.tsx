import { useSelector } from 'react-redux';
import classNames from 'classnames';
import clsx from 'clsx';

import { Image } from '../../../../common/image/image';
import { RootState } from '../../../../../redux/store';
import { useEffect, useState } from '../../../../../hooks/hooks';
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
    <ul className='table__list'>
      {summary &&
        summary.length > 0 &&
        summary.map((note) => {
          return (
            <li
              key={note.category}
              className={classNames({
                'my-3 mx-0 py-2 px-3 bg-cyan-200 w-full grid grid-cols-3 items-center': true,
              })}
            >
              <div className='flex justify-start items-center w-52 whitespace-nowrap overflow-hidden gap-2'>
                <span className='block w-[30px] p-1 rounded-[50%]  bg-gray-500'>
                  <Image
                    src={
                      IconsSrc[note.category.toUpperCase() as IconsSrcType] ||
                      IconsSrc.TASK
                    }
                    alt={note.category}
                    width={30}
                    className={clsx('max-w-full w-[30px] text-black', 'button--light')}
                  />
                </span>
                <span className='capitalize overflow-hidden text-ellipsis'>{note.category}</span>
              </div>
              <p className='capitalize'>{note.archived}</p>
              <p className='capitalize'>{note.active}</p>
            </li>
          );
        })}
    </ul>
  );
};

export { TableSummaryList };
