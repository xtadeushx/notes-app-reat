import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../common/button/button';
import { IconsSrc } from '../../common/enums/icons-src';
import { NotesStatus } from '../../common/enums/notes-status';
import { formatDateLong, formatDateShort } from '../../utils/date-helper';
import { addNote, editNote } from '../../redux/slices/notes-slice';
import { CreateMode } from '../../common/enums/create-mode';
import { TDevelopMode } from '../../common/types/note.type';
import { RootState } from '../../redux/store';
import { useForm, SubmitHandler } from '../../hooks/hooks';
import { ExceptionMessage } from '../../common/enums/exception-message';

import styles from './form.module.scss';

const SELECT__OPTIONS = [
  { id: 1, value: 'task', text: 'Task' },
  { id: 2, value: 'random thoughts', text: 'Random Thoughts' },
  { id: 3, value: 'idea', text: 'Idea' },
  { id: 4, value: 'quote', text: 'Quote' },
];

interface IFormProps {
  mode: TDevelopMode;
  handelOpen: () => void;
  currentId: string;
}
type IFormInput = {
  name: string;
  category: string;
  content: string;
  date: string;
};

type IconsSrcType = keyof typeof IconsSrc;
const Form: React.FC<IFormProps> = ({ mode, handelOpen, currentId }) => {
  const dispatch = useDispatch();
  const { notesList } = useSelector((state: RootState) => state.notes);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IFormInput> = (data: {
    category: string;
    name: string;
    content: string;
  }) => {
    if (mode === 'create') {
      const newNote = {
        id: uuidv4(),
        src: IconsSrc[data.category as IconsSrcType] || IconsSrc.TASK,
        title: data.name,
        createdAt: formatDateLong(new Date(Date.now())),
        category: data.category,
        content: [data.content],
        dates: [],
        status: NotesStatus.ACTIVE,
      };
      dispatch(addNote(newNote));
    } else {
      const currentItem = notesList.find((item) => item.id === currentId);
      if (!currentItem) return;
      const newNote = {
        ...currentItem,
        title: data.name,
        createdAt: formatDateLong(new Date(Date.now())),
        category: data.category,
        src: IconsSrc[data.category as IconsSrcType] || IconsSrc.TASK,
        content: [...currentItem.content, data.content],
        dates: [formatDateShort(new Date(currentItem.createdAt))],
      };
      dispatch(editNote({ id: currentId, newNote }));
    }
    reset();
    handelOpen();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles['label']}>
        Name
        <input
          className={styles.input}
          {...register('name', {
            required: ExceptionMessage.REQUIRED__FIELD,
            maxLength: {
              value: 20,
              message: ExceptionMessage.MAX_LENGTH,
            },
            minLength: {
              value: 5,
              message: ExceptionMessage.MAX_LENGTH,
            },
          })}
        />
        <div className="error__field">
          {errors?.name && (
            <p className={styles.error__message}>
              {errors?.name.message || ExceptionMessage.UNKNOWN_ERROR}
            </p>
          )}
        </div>
      </label>
      <label className={styles['label']}>
        Category
        <select className={styles['select']} {...register('category')}>
          {SELECT__OPTIONS.map((el) => {
            return (
              <option key={el.id} value={el.value}>
                {el.text}
              </option>
            );
          })}
        </select>
      </label>
      <label className={styles['label']}>
        Content
        <input
          className={styles.input}
          {...register('content', {
            required: ExceptionMessage.REQUIRED__FIELD,
            maxLength: {
              value: 30,
              message: ExceptionMessage.MAX_LENGTH,
            },
            minLength: {
              value: 5,
              message: ExceptionMessage.MAX_LENGTH,
            },
          })}
        />
        <div className="error__field">
          {errors?.content && (
            <p className={styles.error__message}>
              {errors?.content.message || ExceptionMessage.UNKNOWN_ERROR}
            </p>
          )}
        </div>
      </label>
      <Button type="submit" className={styles.add__note}>
        {mode === CreateMode.CREATE ? 'Add note' : 'Edit note'}
      </Button>
    </form>
  );
};

export { Form };
