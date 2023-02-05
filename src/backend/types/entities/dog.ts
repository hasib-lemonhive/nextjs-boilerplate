import { ISanityCustomPortableText } from './../general/portable-text';
import { ISanityCustomImage } from './../general/image';

export interface ISanityDog {
  name: string;
  breed: string;
  isGoodDog: boolean;
  image: ISanityCustomImage;
  description: ISanityCustomPortableText;
}
