import { author } from "../dummy-db/authorData";
import { books } from "../dummy-db/bookData";
import authorResolver from "./Author/resolvers";
import bookResolvers from "./Books/resolvers";

const resolversG = {
  Author: {
    books: (author: any) =>
      books.find((b) => {
        return b.authorId === author.id;
      }),
  },
  Book: {
    author: (book: any) =>
      author.find((a) => {
        book.authorId === a.id;
      }),
  },
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
