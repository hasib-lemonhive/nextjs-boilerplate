import { ISanityCustomPortableText } from 'src/backend/types/general/portable-text';

export const CardImageDimensions = {
  height: 400,
  width: 600,
};

export interface ICard {
  item: {
    name: string;
    description: ISanityCustomPortableText;
    image: {
      src: string;
      alt: string;
      lqip: string;
    };
  };
  link?: string;
}
