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
  const backupLQIP =
    'data:image/webp;base64,UklGRqoCAABXRUJQVlA4WAoAAAAgAAAApQAApQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggvAAAAJAMAJ0BKqYApgA+7XaxVimnJCOgSLkwHYlpbt1fxCsg/IBP1e0Uv6zbh195V1oQ0qg4eMgl9v5lldvwNtcsk7j4QQwDRA1cK4GZWZJqoBywwvsGhWYf0qTZx1ngtlNpr6+bG37cr8T+r89ToAAA/vDfIg4NNQS8amAH8uIwTx3D5NaTosqQbj6ifnwCm+Lq79XByrXyq+LJ8a3J1EqztLRsCGcEzbYgzrhLjw0m2YxHaWtkSUQlc5SwgAAA';

  return (
    <Image
      height={props.height || 612}
      width={props.width || 612}
      src={src}
      alt={props.alt}
      placeholder={props.lqip ? 'blur' : undefined}
      blurDataURL={props.lqip || backupLQIP}
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
