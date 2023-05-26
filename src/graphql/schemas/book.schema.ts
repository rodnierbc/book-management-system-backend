import * as yup from 'yup';

// Schema for validating the publication year field
const publicationYear = yup
  .number()
  .typeError('Publication Year must be a number')
  .positive('Publication Year must be a positive number')
  .integer('Publication Year must be an integer')
  .min(1800, 'Publication Year must be greater than or equal to 1800')
  .max(new Date().getFullYear(), 'Publication Year must be less than or equal to the current year');

// Schema for validating the input when getting a book
const getBookInputSchema = yup.object().shape({
  id: yup.string().uuid().required(),
});

// Schema for validating the input when creating a book
const createBookSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  author: yup.string().required('Author is required'),
  publicationYear: publicationYear.required('Publication Year is required'),
});

// Schema for validating the input when updating a book
const updateBookSchema = yup.object().shape({
  id: yup.string().required('Book ID is required'),
  title: yup.string(),
  author: yup.string(),
  publicationYear: publicationYear,
});

// Schema for validating the input when deleting a book
const deleteBookSchema = yup.object().shape({
  id: yup.string().required('Book ID is required'),
});

export { getBookInputSchema, createBookSchema, updateBookSchema, deleteBookSchema };
