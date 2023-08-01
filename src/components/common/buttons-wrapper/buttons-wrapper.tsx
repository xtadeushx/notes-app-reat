import React from 'react';
import styles from './buttons-wrapper.module.scss';

type TButtonsWrapper = {
  children: React.ReactNode;
};

const ButtonsWrapper: React.FC<TButtonsWrapper> = ({ children }) => {
  return <div className={styles.buttons__wrapper}>{children}</div>;
};

export { ButtonsWrapper };
