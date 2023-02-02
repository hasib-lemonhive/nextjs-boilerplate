import { gql } from '@apollo/client';

export const IMAGE_FRAGMENT = gql(`
  fragment ImageFragment on CustomImageSchema {
    altDescription
    figcaption
    imageFile {
      asset {
        url
        metadata {
          dimensions {
            height
            width
            aspectRatio
          }
          lqip
        }
      }
    }
  }
`);
