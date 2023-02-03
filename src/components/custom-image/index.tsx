import Image from 'next/image';
import { useState } from 'react';
import { ICustomFillImage, ICustomImage } from './interface';

/**
 * This is a custom image component. It has the following features:
 * - Uses lqip to render placeholder images, sanity images have lqip so it can passed here.
 * - Renders a fallback image if the src fails to load.
 * @param props ICustomImage
 * @returns
 */
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

/**
 * This is a custom image component. It has the following features:
 * - Renders in layout fill mode.
 * - Uses lqip to render placeholder images, sanity images have lqip so it can passed here.
 * - Renders a fallback image if the src fails to load.
 * @param props ICustomImage
 * @returns
 */
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
