import { Context } from "..";
import { author } from "../dummy-db/authorData";
import { books } from "../dummy-db/bookData";
import authorResolver from "./Author/resolvers";
import bookResolvers from "./Books/resolvers";

const resolversG = {
  Author: {
    books: async (author: any, _: any, context: Context) => {
      return await context.prisma.books.findMany({
        where: {
          authorID: author.id,
        },
      });
    },
  },
  Book: {
    author: async (book: any, _: any, context: Context) => {
      return await context.prisma.author.findUnique({
        where: {
          id: book.authorID
        }
      })
    }
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
