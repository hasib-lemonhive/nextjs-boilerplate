import { IMAGE_FRAGMENT } from './fragments/image';
import { gql } from '@apollo/client';

export const DogsQuery = gql`
  ${IMAGE_FRAGMENT}
  query AllDogs {
    allDog {
      _id
      name
      breed
      isGoodDog
      customImageSchema {
        ...ImageFragment
      }
      customPortableTextRaw
    }
  }
`;
