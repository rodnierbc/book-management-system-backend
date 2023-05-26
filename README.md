# Book Management System Backend

![GitHub package.json version](https://img.shields.io/github/package-json/v/rodnierbc/book-management-system-backend)
![GitHub](https://img.shields.io/github/license/rodnierbc/book-management-system-backend)

## Description

This project is the backend for a Book Management System. It allows users to perform CRUD operations on books.

## Features

- Get all books
- Get a specific book by ID
- Create a new book
- Update an existing book
- Delete a book

## Technologies Used

- Node.js
- Express.js
- Apollo Server
- Prisma
- GraphQL
- Yup
- MySQL

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/book-management-system-backend.git
cd book-management-system-backend
```
2. Install the dependencies:

```bash
npm install
```

## Environment Variables

For the application to run, it needs a connection to a MySQL database. This is specified using the environment variable DATABASE_URL. Create a .env file in the root directory of your project and add the following:

```
DATABASE_URL="postgresql://user:password@localhost:3306/book_management"
```
Replace user, password, localhost, and 3306 with your actual MySQL username, password, host and port respectively.


## Database Setup with Prisma

This backend uses Prisma for database management. Follow these steps to setup your database:

1. Install Prisma CLI globally on your machine:

```bash
npm install -g prisma
```

2. Run the following command to generate the Prisma Client from the **/prisma directory:
```
npx prisma generate
```

## Usage

To start the development server:
```
npm run dev
```

## Running Tests

You can run tests using the following command:
```
npm run test
```

You can also watch for changes and run tests automatically:
```
npm run test:watch
```

## Author

Rodnier Borrego



