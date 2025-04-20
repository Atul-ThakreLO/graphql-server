const bookTypeDef = `
    type Book {
        id:ID!
        title: String!
        description: String!
        published: Boolean!
        author: Author!
        createdAt: String!
        updatedAt: String!
    }
`;

export default bookTypeDef;
