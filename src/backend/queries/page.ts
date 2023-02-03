import { gql } from '@apollo/client';

export const PageQuery = gql`
  query Page {
    Page(id: "24f1e164-c6c0-419f-aced-66e2b89fea70") {
      customPortableTextRaw
    }
  }
`;
