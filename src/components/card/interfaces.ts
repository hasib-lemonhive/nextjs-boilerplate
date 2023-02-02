import { PortableTextBlock } from '@portabletext/types';

export interface IDog {
  name: string;
  breed: string;
  description: PortableTextBlock[];
  image: {
    url: string;
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
  testId?: string;
}
