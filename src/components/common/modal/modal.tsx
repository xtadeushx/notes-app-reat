import { FC } from 'react';

import { useModal } from './hooks/hooks.js';

import { Portal } from '../../../components/common/portal/portal';
import styles from './styles.module.scss';
import clsx from 'clsx';
import classNames from 'classnames';

type TModalProps = {
  isOpen: boolean;
  isCentered: boolean;
  onClose: () => void;
  children: React.ReactElement;
};

const Modal: FC<TModalProps> = ({ isOpen, isCentered, onClose, children, }) => {
  const { handleDisableContentContainerClick, handleOutsideClick } = useModal({
    onClose,
  });
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames({
          [styles.centered]: isCentered,
          [styles.modal]: true,
          [styles.modal__active]: isOpen,
          [styles.modal__hide]: !isOpen
        })}
      >
        <div className={styles.modal__wrapper}></div>
        <div className={styles.modal__body}>
          {children}
        </div>
        <p className={styles.close}>X</p>
      </div>
    </Portal>
  );
};

export { Modal };
