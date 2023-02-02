import Image from 'next/image';
import { useState } from 'react';
import { ICustomFillImage, ICustomImage } from './interface';

export function CustomImage(props: ICustomImage) {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      height={props.height || 612}
      width={props.width || 612}
      src={src}
      alt={props.alt}
      placeholder={props.lqip ? 'blur' : undefined}
      blurDataURL={props.lqip ? props.lqip : undefined}
      onError={() => {
        setSrc('/image-error/index.jpg');
      }}
    />
  );
}

export function CustomFillImage(props: ICustomFillImage) {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      src={src}
      alt={props.alt}
      placeholder={props.lqip ? 'blur' : undefined}
      blurDataURL={props.lqip ? props.lqip : undefined}
      fill={true}
      onError={() => {
        setSrc('/image-error/index.jpg');
      }}
    />
  );
}
