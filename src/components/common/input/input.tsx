import { FC } from 'react';

import styles from './input.module.scss';
import { TInputProps } from './types';

const Input: FC<TInputProps> = ({
  name,
  type = 'text',
  required = true,
  value,
  onChange,
  text,
  ...rest
}) => {
  return (
    <label className={styles.label} >
      {text}
      < input
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

export { Input };
