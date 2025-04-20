import authorMutations from "./Author/mutations";
import authorQuery from "./Author/quereis";
import authorTypes from "./Author/typeDefs";
import bookMutation from "./Books/mutation";
import bookQuery from "./Books/queries";
import bookTypeDef from "./Books/typeDef";

interface Author {
  id: string;
  name: string;
  password: string;
}

const typeDefG = `
    type Query {
        ${authorQuery}
        ${bookQuery}
    }
    type Mutation {
        ${authorMutations}
        ${bookMutation}
    }
    ${authorTypes}
    ${bookTypeDef}
`;

export default typeDefG;
