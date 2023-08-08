import clsx from 'clsx';
import { TImageProps } from './types';

const Image = ({ alt, className, src, width }: TImageProps) => (
  <img
    className={clsx('max-w-full object-contain', className)}
    width={width}
    src={src}
    alt={alt}
  />
);

export { Image };
