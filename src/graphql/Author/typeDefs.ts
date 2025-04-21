const authorTypes = `#gql
    type Author {
        id: ID!
        name: String!
        password: String!
        books: [Book]
    }
`;

export default authorTypes;
