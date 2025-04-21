import { Context } from "../..";

interface Author {
  id: string;
  name: string;
  password: string;
}

const authorResolver = {
  Query: {
    authors: async (
      _: any,
      args: Author,
      context: Context
    ): Promise<Author[]> => {
      return await context.prisma.author.findMany();
    },
    author: async (
      _: any,
      { id }: Author,
      context: Context
    ): Promise<Author | null> => {
      return await context.prisma.author.findUnique({
        where: {
          id: id,
        },
      });
    },
  },
  Mutation: {
    createAuthor: async (
      _: any,
      args: Author,
      context: Context
    ): Promise<Author> => {
      return await context.prisma.author.create({
        data: args,
      });
    },
  },
};

export default authorResolver;
