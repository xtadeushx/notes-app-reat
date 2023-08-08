import { FC } from 'react';
import ReactDOM from 'react-dom';

import { useEffect, useMemo } from '../../../hooks/hooks';

import styles from './styles.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Portal: FC<any> = ({ children }) => {
  const portalContainer = useMemo(() => {
    const el = document.createElement('div');
    el.classList.add(styles.portal);

    return el;
  }, []);

  useEffect(() => {
    const wasOverflowHidden = document.body.classList.contains(
      styles.noOverflow
    );
    document.body.appendChild(portalContainer);
    document.body.classList.add(styles.noOverflow);

    return () => {
      document.body.removeChild(portalContainer);
      if (!wasOverflowHidden) {
        document.body.classList.remove(styles.noOverflow);
      }
    };
  }, [portalContainer]);

  return ReactDOM.createPortal(children, portalContainer);
};

export { Portal };