import clsx from 'clsx';
import classNames from 'classnames';

import { useDispatch } from '../../../../hooks/hooks';
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

import { NotesStatus } from '../../../../common/enums/notes-status';
import { TDevelopMode } from '../../../../common/types/note.type';


type TTableItemProps = {
  id: string;
  src: string;
  title: string;
  createdAt: string;
  category: string;
  content: string[];
  dates: string[];
  status?: 'active' | 'archived';
  handelMode: (mode: TDevelopMode) => void;
  handelOpen: () => void;
  handelId: (id: string) => void;
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
  handelOpen,
  handelId,
}) => {
  const dispatch = useDispatch();
  const handleDeleteItem = (id: string) => dispatch(deleteNote(id));
  const handelNoteStatus = (id: string) => dispatch(changeNoteStatus(id));
  const handelEditItem = () => {
    handelId(id);
    handelMode('edit');
    handelOpen();
  };

  return (
    <li
      className={classNames({
        'my-3 mx-0 py-2 px-3 bg-cyan-200 w-full grid grid-cols-6 items-center': true,
        'bg-gray-300 decoration-clone': status === NotesStatus.ARCHIVED,
      })}
    >
      <div className='flex justify-start items-center w-[200px] overflow-hidden gap-3 whitespace-nowrap text-ellipsis '>
        <span className='block w-[30px] p-1 rounded-[50%]  bg-gray-500'>
          <Image
            src={src}
            alt={category}
            width={30}
            className={clsx('w-full w-[30] text-color-black', 'button--light')}
          />
        </span>
        <span className={'capitalize overflow-hidden text-ellipsis max-w-[100px]'}>{title}</span>
      </div>
      <p className="item__createdAt">{createdAt}</p>
      <p className={'capitalize'}>{category}</p>
      <p className={'w-[200px] whitespace-nowrap overflow-hidden text-ellipsis'}>{content.join(' ,')}</p>
      <p className="item__dates">{dates.join(' ,')}</p>

      <ButtonsWrapper>
        <Button
          type="button"
          onClick={handelEditItem}
          disabled={status === NotesStatus.ARCHIVED}
          className={classNames({
            'button--light': status === NotesStatus.ARCHIVED,
          })}
        >
          <Image alt="editing icon" src={editingIcon} />
        </Button>
        <Button
          type="button"
          onClick={() => handelNoteStatus(id)}
          className={classNames({
            'button--light': status === NotesStatus.ARCHIVED,
          })}
        >
          <Image alt="archive icon" src={archiveIcon} />
        </Button>
        <Button
          type="button"
          onClick={() => handleDeleteItem(id)}
          disabled={status === NotesStatus.ARCHIVED}
          className={classNames({
            'button--light': status === NotesStatus.ARCHIVED,
          })}
        >
          <Image alt="delete icon" src={deleteIcon} />
        </Button>
      </ButtonsWrapper>
    </li>
  );
};

export { TableItem };
