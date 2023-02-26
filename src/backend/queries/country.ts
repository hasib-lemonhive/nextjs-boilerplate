import { gql } from '@apollo/client';

export const CountriesQuery = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;
