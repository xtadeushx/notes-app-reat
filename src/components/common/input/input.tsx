import { FC } from 'react';

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
    <label
      className='w-full placeholder:opacity-40'>
      {text}
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className='w-full py-1 px-2 my-2 mx-0 bg-white'
        {...rest}
      />
    </label>
  );
};

export { Input };
