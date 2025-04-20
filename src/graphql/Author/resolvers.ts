import { author } from "../../dummy-db/authorData";

interface Author {
  id: string;
  name: string;
  password: string;
}

const authorResolver = {
  Query: {
    authors: async (_: any, args: Author):Promise<Author[]> => {
      return author;
    },
  },
  Mutation: {
    createAuthor: async (_: any, args: Author): Promise<String> => {
      author.push(args);
      return args.id;
    },
  },
};

export default authorResolver;
