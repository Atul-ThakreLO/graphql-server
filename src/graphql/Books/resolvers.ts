import { author } from "../../dummy-db/authorData";
import { books } from "../../dummy-db/bookData";

interface Book {
  id: string;
  title: string;
  description: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  authorId: string;
}

const bookResolvers = {
  Query: {
    books: async (_: any, args: Book): Promise<Book[]> => {
      return books;
    },
    book: async (_: any, { id }: any): Promise<Book | undefined> => {
      return books.find((b) => b.id === id);
    },
  },
  Mutation: {
    createBook: async (_: any, args: Book): Promise<Book> => {
      books.push(args);
      return args;
    },
    updateBook: async (_: any, args: any): Promise<Book | undefined> => {
      const book = books.find((b) => b.id === args.id);
      if (book) {
        book.title = args.title ? args.title : book?.title;
        book.description = args.description
          ? args.description
          : book?.description;
        book.published = args.published ? args.published : book?.published;
        book.updatedAt = args.updatedAt ? args.updatedAt : book?.updatedAt;
      }
      return book;
    },
    deleteBook: async (_: any, { id }: any): Promise<Boolean> => {
      // delete logic here
      return true;
    },
  },
};

export default bookResolvers;
