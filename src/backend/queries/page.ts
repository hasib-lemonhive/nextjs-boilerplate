import { portableTextFragment } from './fragments/portable-text';
import { groq } from 'next-sanity';
import { linkFragment } from './fragments/link';

export const PageQuery = groq`
  *[_type == "page"][0]{
    ...,
    content[]{
      ${portableTextFragment}
    },
    anotherRequiredLink{
      ${linkFragment}
    },
    optionalLink{
      ${linkFragment}
    },
    requiredLink{
      ${linkFragment}
    }
  }
`;
