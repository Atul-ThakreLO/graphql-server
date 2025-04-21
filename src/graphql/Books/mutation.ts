const bookMutation = `
    createBook(title: String!, description: String!, published: Boolean!, authorID: String!): Book!
    updateBook(id: String!, title: String!, description: String!, published: Boolean!, updatedAt: String!): Book!
    deleteBook(id: String!): Book!
`;

export default bookMutation;
