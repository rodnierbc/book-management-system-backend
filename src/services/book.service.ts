import { PrismaClient } from '@prisma/client';
import { BookErrorCode } from '../lib/constants/errorCodes';
import { GetBookArgs, BookInput, UpdateBookInput, DeteteBook, Book } from '../lib/interfaces/ibook';

const prisma = new PrismaClient();

/**
 * Retrieves a book by its ID.
 * @param {string} id - The ID of the book.
 * @returns {Promise<Book|null>} - The book object if found, or null if not found.
 */
export const getBook = async ({ id }: GetBookArgs): Promise<Book | null> => {
  try {
    const book = await prisma.book.findUnique({
      where: { id: id },
    });

    return book;
  } catch (error) {
    console.error('Error retrieving book:', error);
    throw new Error(BookErrorCode.DatabaseError);
  }
};

/**
 * Retrieves all books.
 * @returns {Promise<Book[]>} - An array of all books.
 */
export const getBooks = async (): Promise<Book[]> => {
  try {
    const books = await prisma.book.findMany();

    return books;
  } catch (error) {
    console.error('Error retrieving books:', error);

    throw new Error(BookErrorCode.DatabaseError);
  }
};

/**
 * Creates a new book.
 * @param {BookInput} createBookData - The data for the new book.
 * @returns {Promise<Book>} - The newly created book.
 */
export const createBook = async ({ title, author, publicationYear }: BookInput): Promise<Book> => {
  try {
    const createdBook = await prisma.book.create({
      data: {
        title,
        author,
        publicationYear,
      },
    });

    return createdBook;
  } catch (error) {
    console.error('Error creating book:', error);
    throw new Error(BookErrorCode.DatabaseError);
  }
};

/**
 * Updates an existing book.
 * @param {UpdateBookInput} updateBookData - The updated data for the book.
 * @param {string} updateBookData.id - The ID of the book to update.
 * @param {object} updateBookData.updatedFields - The updated data for the book.
 * @returns {Promise<Book|null>} - The updated book object if found, or null if not found.
 */
export const updateBook = async ({ id, updatedFields }: UpdateBookInput): Promise<Book | undefined> => {
  try {
    const updatedBook = await prisma.book.update({
      where: { id: id },
      data: updatedFields,
    });

    return updatedBook;
  } catch (error) {
    console.error('Error updating book:', error);
  }
};

/**
 * Deletes a book by its ID.
 * @param {string} id - The ID of the book to delete.
 * @returns {Promise<boolean>} - True if the book was successfully deleted, false otherwise.
 */
export const deleteBook = async ({ id }: DeteteBook): Promise<Book | undefined> => {
  try {
    const deletedBook = await prisma.book.delete({
      where: { id: id },
    });

    return deletedBook;
  } catch (error) {
    console.error('Error deleting book:', error);
  }
};
