const bookMutation = `
    createBook(id: String!, title: String!, description: String!, published: Boolean!, authorId: String! createdAt: String!, updatedAt: String!): Book!
    updateBook(id: String!, title: String, description: String, published: Boolean, updatedAt: String!): Book!
    deleteBook(id: String!): Boolean
`;

export default bookMutation;
