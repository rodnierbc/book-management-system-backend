// import { Book } from '@prisma/client';
import { GetBookArgs, Book } from '../../../lib/interfaces/ibook';
import { booksResolver } from '../../../graphql/resolvers/book.resolver';
// import { getBook, getBooks, createBook, updateBook, deleteBook } from '../../../services/book.service';
import * as bookService from '../../../services/book.service';

describe('Book Resolver', () => {
  const books = [
    { id: '21488284-0d3a-4af5-b5cc-e191939cead8', title: 'Title 1', author: 'Author 1', publicationYear: 2023, createdAt: new Date(), updatedAt: new Date() },
    { id: 'a6ecd27e-cf14-407b-89a6-addf637418e5', title: 'Title 2', author: 'Author 2', publicationYear: 2023, createdAt: new Date(), updatedAt: new Date() },
  ];

  describe('getBook', () => {
    it('should return a book by ID', async () => {
      // Spy on getBook function
      const getBookSpy = jest.spyOn(bookService, 'getBook');
      // Mocking getBook function
      getBookSpy.mockImplementation(() => {
        const mockedBook: Book | null = books[0];
        return Promise.resolve(mockedBook);
      });

      const result = await booksResolver.Query.getBook(null, { id: books[0].id });
      expect(result).toEqual({
        success: true,
        book: books[0],
        error: null,
      });
      expect(result.book).toMatchObject(books[0]);

      getBookSpy.mockRestore();
    });
  });

  describe('getBooks', () => {
    it('should return all books', async () => {
      // Spy on getBooks function
      const getBooksSpy = jest.spyOn(bookService, 'getBooks');
      // Mocking getBooks function
      getBooksSpy.mockImplementation(() => {
        const mockedBooks: Book[] | null = books;
        return Promise.resolve(mockedBooks);
      });

      const result = await booksResolver.Query.getBooks(null);
      expect(result).toEqual({
        success: true,
        books: books,
        error: null,
      });
      expect(result.books).toHaveLength(2);

      getBooksSpy.mockRestore();
    });
  });

  describe('createBook', () => {
    it('should create a new book', async () => {
      // Spy on createBook function
      const createBookSpy = jest.spyOn(bookService, 'createBook');
      // Mocking createBook function
      createBookSpy.mockImplementation(() => {
        const createdBook: Book = books[0];
        return Promise.resolve(createdBook);
      });

      const bookData = books[0];

      const result = await booksResolver.Mutation.createBook(null, { input: bookData });
      expect(result).toEqual({
        success: true,
        book: books[0],
        error: null,
      });

      createBookSpy.mockRestore();
    });
  });

  describe('updateBook', () => {
    it('should update a book by ID', async () => {
      // Spy on updateBook function
      const updateBookSpy = jest.spyOn(bookService, 'updateBook');
      // Mocking updateBook function
      updateBookSpy.mockImplementation(() => {
        const updatedBook: Book = { ...books[0], publicationYear: 2000 };
        return Promise.resolve(updatedBook);
      });

      const bookDataToUpdate = {
        publicationYear: 2000,
      };

      const result = await booksResolver.Mutation.updateBook(null, { input: { ...bookDataToUpdate, id: books[0].id } });
      expect(result).toEqual({
        success: true,
        book: { ...books[0], publicationYear: 2000 },
        error: null,
      });

      updateBookSpy.mockRestore();
    });
  });

  describe('deleteBook', () => {
    it('should delete a book by ID', async () => {
      // Spy on deleteBook function
      const deleteBookSpy = jest.spyOn(bookService, 'deleteBook');
      // Mocking deleteBook function
      deleteBookSpy.mockImplementation(() => {
        const deletedBook: Book = books[0];
        return Promise.resolve(deletedBook);
      });

      const result = await booksResolver.Mutation.deleteBook(null, { id: books[0].id });
      expect(result).toEqual({
        success: true,
        book: books[0],
        error: null,
      });

      deleteBookSpy.mockRestore();
    });
  });
});
