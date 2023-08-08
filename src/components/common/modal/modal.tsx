import { FC } from 'react';

import { useModal } from './hooks/hooks.js';

import classNames from 'classnames';
import { Portal } from '../portal/portal.js';

type TModalProps = {
  isOpen: boolean;
  isCentered: boolean;
  onClose: () => void;
  children: React.ReactElement;
};

const Modal: FC<TModalProps> = ({ isOpen, isCentered, onClose, children }) => {
  const { handleOutsideClick } = useModal({
    onClose,
  });
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames({
          'items-center': isCentered,
        })}
      >
        <div className="fixed w-full h-full bg-slate-900 opacity-40 top-0 left-0 right-0 bottom-0"></div>
        <div className="w-[400px] absolute top-[5%] left-[50%] translate-x-[-50%] translate-y-[50%] flex-col items-center content-baseline bg-white p-[20px] border-2 border-gray-500 rounded-[10px] ">
          {children}
          <p className='flex justify-center items-center w-[30px] h-[30px] cursor-pointer absolute rounded-[50%] bg-white top-[-25px] right-[-21px]' onClick={() => handleOutsideClick()}>
            X
          </p>
        </div>
      </div>
    </Portal>
  );
};

export { Modal };
