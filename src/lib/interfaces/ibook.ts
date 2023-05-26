export interface Book {
  id: string;
  title: string;
  author: String;
  publicationYear: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface GetBookArgs {
  id: string;
}

export interface GetBookArgs {
  id: string;
}

export interface BookInput {
  title: string;
  author: string;
  publicationYear: number;
}

export interface UpdateBookInput {
  id: string;
  updatedFields: {
    title?: string;
    author?: string;
    publicationYear?: number;
  };
}

export interface DeteteBook {
  id: string;
}
