import { ISanityCustomPortableText } from '../../../backend/types/general/portable-text';

export interface IDog {
  name: string;
  breed: string;
  description: ISanityCustomPortableText;
  image: {
    src: string;
    alt: string;
    lqip: string;
  };
}

export const CardImageDimensions = {
  height: 400,
  width: 600,
};

export interface ICard {
  dog: IDog;
  link?: string;
}
