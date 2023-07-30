import styles from './image.module.scss';
import { TImageProps } from './types';
import clsx from 'clsx';

const Image = ({
  alt,
  className,
  src,
  width,

}: TImageProps) => (
  <img
    className={clsx(
      styles.image,
      className
    )}
    width={width}
    src={src}
    alt={alt}
  />
);

export { Image };
