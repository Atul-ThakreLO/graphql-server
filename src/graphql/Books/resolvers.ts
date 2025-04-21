import { Context } from "../..";
import { author } from "../../dummy-db/authorData";
import { books } from "../../dummy-db/bookData";

interface Book {
  id: string;
  title: string;
  description: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorID?: string;
}

const bookResolvers = {
  Query: {
    books: async (_: any, args: Book, context: Context): Promise<Book[]> => {
      return await context.prisma.books.findMany();
    },
    book: async (
      _: any,
      { id }: Book,
      context: Context
    ): Promise<Book | null> => {
      return await context.prisma.books.findUnique({
        where: {
          id: id,
        },
      });
    },
  },
  Mutation: {
    createBook: async (_: any, args: any, context: Context): Promise<Book> => {
      return context.prisma.books.create({
        data: args,
      });
    },
    updateBook: async (
      _: any,
      args: any,
      context: Context
    ): Promise<Book | undefined> => {
      const { id, ...data } = args;
      console.log(data, id);
      
      return context.prisma.books.update({
        where: {
          id: id,
        },
        data: data,
      });
    },
    deleteBook: async (
      _: any,
      { id }: any,
      context: Context
    ): Promise<any> => {
      return context.prisma.books.delete({
        where: {
          id: id,
        },
      });
    },
  },
};

export default bookResolvers;
