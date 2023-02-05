import { ISanityInternalBlock } from './internal-block';
import { ISanityCustomVideo } from './video';
import { ISanityCustomImage } from './image';
import { PortableTextBlock } from '@portabletext/types';

export type ISanityCustomPortableText = (
  | PortableTextBlock
  | ISanityCustomImage
  | ISanityCustomVideo
  | ISanityInternalBlock
)[];
