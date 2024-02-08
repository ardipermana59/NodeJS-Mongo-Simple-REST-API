# Simple Rest API NodeJS MongoDB
This is a simple REST API for managing book data. This application allows to perform CRUD (Create, Read, Update, Delete) operations on book data.

## Features
- View a list of all books
- View detailed information of a book based on its ID
- Add a new book
- Update book information
- Delete a book from the system

## Before Installation
Make sure you have installed these tools:
- [Vscode](https://code.visualstudio.com/download)
- [NodeJS](https://nodejs.org/en/download)
- [Postman](https://www.postman.com/downloads/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation
1. Download Source Code
```bash
git clone https://github.com/ardipermana59/NodeJS-Mongo-Simple-REST-API.git
npm install
```
2. Create a `.env` file for your environment configuration. Example content for the `.env` file:


```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/<database-name>
```

3. Start the application with the following command:
```
npm start
```

## Usage
Once the application is running, you can access it through a browser or use API testing tools like Postman. Here are some example endpoints you can use:

| Method | Endpoint                  | Description                                         |
|--------|---------------------------|-----------------------------------------------------|
| GET    | `/api/v1/books`             | Retrieve a list of all books.                      |
| GET    | `/api/v1/books/:id`         | Retrieve detailed information of a book by its ID. |
| POST   | `/api/v1/books`             | Add a new book.                                    |
| PUT    | `/api/v1/books/:id`         | Update book information by its ID.                  |
| DELETE | `/api/v1/books/:id`         | Delete a book from the system by its ID.            |


Make sure to adjust the URL and request methods according to your server configuration.