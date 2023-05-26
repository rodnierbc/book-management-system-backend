import { getBook, getBooks, createBook, updateBook, deleteBook } from '../../services/book.service';
import { BookErrorCode } from '../../lib/constants/errorCodes';
import { getBookInputSchema, createBookSchema, updateBookSchema, deleteBookSchema } from '../schemas/book.schema';

export const booksResolver = {
  Query: {
    // Retrieves a book by ID
    // Returns the book if found, or null if not found
    async getBook(_: any, { id }: Record<string, any>) {
      try {
        // Validate the input
        await getBookInputSchema.validate({ id });

        const book = await getBook({ id: id });
        if (!book) {
          return {
            success: false,
            error: {
              code: BookErrorCode.BookNotFound,
              message: 'Book not found',
            },
            book: null,
          };
        }
        return {
          success: true,
          book: book,
          error: null,
        };
      } catch (error: any) {
        if (error.name === 'ValidationError') {
          return {
            success: false,
            error: {
              code: BookErrorCode.InvalidInput,
              message: error.errors.join(', '),
            },
            book: null,
          };
        }
        console.log('Resolver error:', error);
        throw new Error('Failed to fetch book');
      }
    },
    // Retrieves a list of books
    // Returns an array of books
    async getBooks(_: any) {
      try {
        const books = await getBooks();
        if (!books) {
          return {
            success: false,
            error: {
              code: BookErrorCode.BooksNotFound,
              message: 'Books not found',
            },
            book: null,
          };
        }
        return {
          success: true,
          books: books,
          error: null,
        };
      } catch (error) {
        console.log('Resolver error:', error);
        throw new Error('Failed to fetch books');
      }
    },
  },
  Mutation: {
    // Creates a new book
    // Returns the created book
    async createBook(_: any, { input }: Record<string, any>) {
      try {
        // Validate the input
        await createBookSchema.validate(input);

        const createdBook = await createBook({
          title: input.title,
          author: input.author,
          publicationYear: input.publicationYear,
        });

        if (!createdBook) {
          return {
            success: false,
            error: {
              code: BookErrorCode.BookCreateError,
              message: 'Book create error',
            },
            book: null,
          };
        }
        return {
          success: true,
          book: createdBook,
          error: null,
        };
      } catch (error: any) {
        if (error.name === 'ValidationError') {
          console.log(error);
          return {
            success: false,
            error: {
              code: BookErrorCode.InvalidInput,
              message: error.errors.join(', '),
            },
            book: null,
          };
        }
        console.log('Resolver error:', error);
        throw new Error('Failed to create book');
      }
    },
    // Updates an existing book by ID
    // Returns the updated book if found, or null if not found
    async updateBook(_: any, { input }: Record<string, any>) {
      try {
        // Validate the input
        await updateBookSchema.validate(input);

        const updatedBook = await updateBook({
          id: input.id,
          updatedFields: {
            title: input.title,
            author: input.author,
            publicationYear: input.publicationYear,
          },
        });
        if (!updatedBook) {
          return {
            success: false,
            error: {
              code: BookErrorCode.BookUpdateError,
              message: 'Book update error',
            },
            book: null,
          };
        }
        return {
          success: true,
          book: updatedBook,
          error: null,
        };
      } catch (error: any) {
        if (error.name === 'ValidationError') {
          console.log(error);
          return {
            success: false,
            error: {
              code: BookErrorCode.InvalidInput,
              message: error.errors.join(', '),
            },
            book: null,
          };
        }
        console.log('Resolver error:', error);
        throw new Error('Failed to update book');
      }
    },
    // Deletes a book by ID
    // Returns the deleted book if found, or null if not found
    async deleteBook(_: any, { id }: Record<string, any>) {
      try {
        // Validate the input
        await deleteBookSchema.validate({ id });

        const deletedBook = await deleteBook({
          id: id,
        });
        if (!deletedBook) {
          return {
            success: false,
            error: {
              code: BookErrorCode.BookDeleteError,
              message: 'Book delete error',
            },
            book: null,
          };
        }
        return {
          success: true,
          book: deletedBook,
          error: null,
        };
      } catch (error: any) {
        if (error.name === 'ValidationError') {
          console.log(error);
          return {
            success: false,
            error: {
              code: BookErrorCode.InvalidInput,
              message: error.errors.join(', '),
            },
            book: null,
          };
        }
        console.log('Resolver error:', error);
        throw new Error('Failed to delete book');
      }
    },
  },
};
