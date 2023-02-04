import { gql } from '@apollo/client';

export const IMAGE_FRAGMENT = gql(`
  fragment ImageFragment on CustomImageSchema {
    altDescription
    figcaption
    imageFile {
      hotspot {
        _key
        _type
        x
        y
        height
        width
      }
      crop {
        _key
        _type
        top
        bottom
        left
        right
      }
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
