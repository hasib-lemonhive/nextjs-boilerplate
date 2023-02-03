export interface ICustomFillImage {
  src: string;
  alt: string;
  lqip?: string;
}

export interface ICustomImage extends ICustomFillImage {
  height: number;
  width: number;
}
