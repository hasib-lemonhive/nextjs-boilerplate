import { ISanityCustomVideo } from './video';
import { ISanityCustomImage } from 'src/backend/types/general/image';
import { PortableTextBlock } from '@portabletext/types';

export interface ISanityInternalBlock {
  content: [PortableTextBlock | ISanityCustomImage | ISanityCustomVideo];
}
