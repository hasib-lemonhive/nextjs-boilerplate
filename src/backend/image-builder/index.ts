import { ISanityImage } from 'src/backend/types';
import { ITransformedImage } from './interface';
import imageUrlBuilder from '@sanity/image-url';

/**
 * Update the project id and dataset
 */

const builder = imageUrlBuilder({
  projectId: 'rxvjgfhf',
  dataset: 'production',
});

export function urlForFitWidth(
  source: ISanityImage,
  width: number
): ITransformedImage {
  return {
    src: builder.image(source).auto('format').fit('max').width(width).url(),
    lqip: source.asset?.metadata?.lqip!,
  };
}

export function urlForFitHeight(
  source: ISanityImage,
  height: number
): ITransformedImage {
  return {
    src: builder.image(source).auto('format').fit('max').height(height).url(),
    lqip: source.asset?.metadata?.lqip!,
  };
}

export function urlFor(
  source: ISanityImage,
  width: number,
  height: number
): ITransformedImage {
  return {
    src: builder.image(source).width(width).height(height).fit('min').url(),
    lqip: source.asset?.metadata?.lqip!,
  };
}
