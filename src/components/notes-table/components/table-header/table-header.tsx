import { v4 as uuidv4 } from 'uuid';

import deleteIcon from '../../../../assets/delete.png';
import archiveIcon from '../../../../assets/archive.png';
import { Button } from '../../../common/button/button';
import { ButtonsWrapper } from '../../../common/buttons-wrapper/buttons-wrapper';
import { Image } from '../../../common/image/image';
import { useDispatch, useState } from '../../../../hooks/hooks';
import {
  changeAllNotesStatus,
  deleteAllNotes,
} from '../../../../redux/slices/notes-slice';

import { TStatus } from '../../../../common/types/note.type';
import { NotesStatus } from '../../../../common/enums/notes-status';
import clsx from 'clsx';

interface ITableHeaderProps {
  titleList: string[];
  withButtons: boolean;
  classList: string
}

const TableHeader: React.FC<ITableHeaderProps> = ({
  titleList,
  withButtons,
  classList
}) => {
  const [currentStatus, setCurrentStatus] = useState<TStatus>(
    NotesStatus.ARCHIVED
  );
  const dispatch = useDispatch();

  const handelDeleteAllNotes = () => {
    dispatch(deleteAllNotes());
  };
  const handelArchiveAllNotes = () => {
    dispatch(changeAllNotesStatus(currentStatus));
    setCurrentStatus((prev) =>
      prev === NotesStatus.ACTIVE ? NotesStatus.ARCHIVED : NotesStatus.ACTIVE
    );
  };
  return (
    <div
      className={clsx(classList, 'py-2 px-3 w-full bg-gray-500 text-white grid items-center')}
    >
      {titleList.length > 0 &&
        titleList.map((el) => {
          return (
            <p key={uuidv4()}>
              {el}
            </p>
          );
        })}
      {withButtons && (
        <ButtonsWrapper>
          <Button
            type="button"
            className="button--light"
            onClick={handelArchiveAllNotes}
          >
            <Image alt="archive icon" src={archiveIcon} />
          </Button>
          <Button
            type="button"
            className="button--light"
            onClick={handelDeleteAllNotes}
          >
            <Image alt="delete icon" src={deleteIcon} />
          </Button>
        </ButtonsWrapper>
      )}
    </div>
  );
};

export { TableHeader };
