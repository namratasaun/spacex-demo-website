import gql from 'graphql-tag';

const ships = gql`
  query ships {
    ships(input: { pagination: { limit: 1, offset: 0 } }) {
      id
      class
      image
      active
      name
      __typename
      Missions {
        flight
        name
      }
    }
  }
`;

const query = { ships };
const mutations = {};
const Ships = { query, mutations };
export { Ships };
