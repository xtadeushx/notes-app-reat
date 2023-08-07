import clsx from 'clsx';

import { TButtonProps } from './types';


const Button = ({
  children,
  onClick,
  type,
  dataTestId,
  className = '',
  ...rest
}: TButtonProps) => {
  return (
    <button
      data-test-id={dataTestId}
      className={clsx("w-7 cursor-pointer  bg-transparent hover:scale-110 object-contain ", className)}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
