import React from 'react';

type TButtonsWrapper = {
  children: React.ReactNode;
};

const ButtonsWrapper: React.FC<TButtonsWrapper> = ({ children }) => {
  return <div className='flex justify-end items-center gap-2'>{children}</div>;
};

export { ButtonsWrapper };
