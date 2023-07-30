import { FC } from 'react';

import { useModal } from './hooks/hooks.js';

import { Portal } from '../../../components/common/portal/portal';
import styles from './modal.module.scss';
import classNames from 'classnames';

type TModalProps = {
  isOpen: boolean;
  isCentered: boolean;
  onClose: () => void;
  children: React.ReactElement;
};

const Modal: FC<TModalProps> = ({ isOpen, isCentered, onClose, children, }) => {
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
          [styles.centered]: isCentered,
          [styles.modal]: true,
        })}
      >
        <div className={styles.modal__wrapper} ></div>
        <div className={styles.modal__body}>
          {children}
        </div>
        <p className={styles.close} onClick={() => handleOutsideClick()
        }>X</p>
      </div>
    </Portal>
  );
};

export { Modal };
