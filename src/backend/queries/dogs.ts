import { groq } from 'next-sanity';
import { imageFragment } from './fragments/image';

export const DogsQuery = groq`
  *[_type == "dog"]{
    ...,
    image{
      ${imageFragment}
    }
  }
`;
