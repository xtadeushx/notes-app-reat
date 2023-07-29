import { FC } from 'react';

import styles from './input.module.scss';
import { TInputProps } from './types';

const Input: FC<TInputProps> = ({
  dataTestId,
  name,
  type = 'text',
  required = true,
  value,
  onChange,
  children,
  ...rest
}) => {
  return (
    <label className={styles.label} >
      {children}
      < input
        data-test-id={dataTestId}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={styles['input']}
        {...rest}
      />
    </label >
  );
};

export default Input;
