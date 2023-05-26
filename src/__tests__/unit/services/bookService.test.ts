import * as bookService from '../../../services/book.service';

describe('Book Service', () => {
  const mockedBook = {
    id: '21488284-0d3a-4af5-b5cc-e191939cead8',
    title: 'Title',
    author: 'Author',
    publicationYear: 2002,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('getBook', () => {
    it('should return a book by ID', async () => {
      jest.spyOn(bookService, 'getBook').mockResolvedValue(mockedBook);

      const result = await bookService.getBook({ id: mockedBook.id });

      expect(result).toEqual(mockedBook);
    });
  });

  describe('getBooks', () => {
    it('should return all books', async () => {
      jest.spyOn(bookService, 'getBooks').mockResolvedValue([mockedBook]);

      const result = await bookService.getBooks();

      expect(result).toEqual([mockedBook]);
    });
  });

  describe('createBook', () => {
    it('should create a book', async () => {
      jest.spyOn(bookService, 'createBook').mockResolvedValue(mockedBook);

      const newBook = {
        title: 'Title',
        author: 'Author',
        publicationYear: 2002,
      };

      const result = await bookService.createBook(newBook);

      expect(result).toEqual(mockedBook);
    });
  });

  describe('updateBook', () => {
    it('should update an existing book', async () => {
      jest.spyOn(bookService, 'updateBook').mockResolvedValue(mockedBook);

      const updatedBook = {
        title: 'Updated Title',
        author: 'Updated Author',
      };

      const result = await bookService.updateBook({ id: mockedBook.id, updatedFields: updatedBook });

      expect(result).toEqual(mockedBook);
    });
  });

  describe('deleteBook', () => {
    it('should delete a book by ID', async () => {
      jest.spyOn(bookService, 'deleteBook').mockResolvedValue(mockedBook);

      const result = await bookService.deleteBook({ id: mockedBook.id });

      expect(result).toEqual(mockedBook);
    });
  });
});
