import styles from './select.module.scss';
import { TSelectProps } from './types';
import clsx from 'clsx';

const Select = ({
  name,
  dataTestId,
  children,
  optionList = [],
  value,
  onchange,
  ...rest
}: TSelectProps) => {
  return (
    <label className={styles['select']}>
      {children}
      <select
        data-test-id={dataTestId}
        value={value}
        name={name}
        onChange={onchange}
        {...rest}
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
