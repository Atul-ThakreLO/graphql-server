import { books } from "../../dummy-db/bookData";

interface Book {
  id: string;
  title: string;
  description: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const bookResolvers = {
  Query: {
    book: async (_: any, args: Book): Promise<Book[]> => {
      return books;
    },
  },
  Mutation: {
    createBook: async (_: any, args: Book): Promise<Book> => {
      books.push(args);
      return args;
    },
  },
};

export default bookResolvers;
