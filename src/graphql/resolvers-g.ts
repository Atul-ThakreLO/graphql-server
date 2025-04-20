import authorResolver from "./Author/resolvers";
import bookResolvers from "./Books/resolvers";

const resolversG = {
  Query: {
    ...authorResolver.Query,
    ...bookResolvers.Query,
  },
  Mutation: {
    ...authorResolver.Mutation,
    ...bookResolvers.Mutation,
  },
};

export default resolversG;
