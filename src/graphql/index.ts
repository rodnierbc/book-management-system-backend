import { readFileSync } from 'fs';
import { join } from 'path';
import { booksResolver } from './resolvers/book.resolver';

// Read the content of the book.graphql file
const bookTypes = readFileSync(join(__dirname, './typeDefs/book.graphql'), {
  encoding: 'utf-8',
});

export const typeDefs = `${bookTypes}`;

export const resolvers = {
  Query: {
    ...booksResolver.Query,
  },
  Mutation: {
    ...booksResolver.Mutation,
  },
};
