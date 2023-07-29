import { FC } from 'react';

import { useModal } from './hooks/hooks.js';

import { Portal } from '../../../components/common/portal/portal';
import styles from './styles.module.scss';
import clsx from 'clsx';

type TModalProps = {
  isOpen: boolean;
  isCentered: boolean;
  onClose: () => void;
  children: React.ReactElement;
};

const Modal: FC<TModalProps> = ({ isOpen, isCentered, onClose, children }) => {
  const { handleDisableContentContainerClick, handleOutsideClick } = useModal({
    onClose,
  });
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={clsx(styles.modal, isCentered && styles.centered)}>
        {children}
      </div>
    </Portal>
  );
};

export { Modal };
