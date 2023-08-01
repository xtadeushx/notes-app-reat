import clsx from 'clsx';
import { TImageProps } from './types';
import styles from './image.module.scss';

const Image = ({ alt, className, src, width }: TImageProps) => (
  <img
    className={clsx(styles.image, className)}
    width={width}
    src={src}
    alt={alt}
  />
);

export { Image };
