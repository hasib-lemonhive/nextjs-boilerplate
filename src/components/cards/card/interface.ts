export const CardImageDimensions = {
  height: 400,
  width: 600,
};

export interface ICard {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
    lqip: string;
  };
  tags: string[];
  link?: string;
}
