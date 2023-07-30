import styles from './select.module.scss';
import { TSelectProps } from './types';

const Select = ({
  name,
  title,
  optionList = [],
  value,
  onchange,
  ...rest
}: TSelectProps) => {
  return (
    <label className={styles['label']}>
      {title}
      <select
        value={value}
        name={name}
        onChange={onchange}
        {...rest}
        className={styles['select']}
      >
        {optionList.map((el) => {
          return (
            <option key={el.id} value={el.value}>
              {el.text}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select;
