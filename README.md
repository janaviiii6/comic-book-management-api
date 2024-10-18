# Comic Book Management API

The Comic Book Management API allows users to perform CRUD (Create, Read, Update, Delete) operations on comic book entries. This API provides endpoints for managing comic books, including details like title, author, year of publication, price, category, and condition.

## Features

- **Create** a new comic book entry
- **Read** all comic books or a specific comic book
- **Update** an existing comic book entry
- **Delete** a comic book entry
- Input validation and error handling

##Technologies
- Frontend - React
- Backend - NodeJs, Express
- Database - Mysql
- API Testing - Postman

## Backend Packages

- **express**: A popular web framework for building APIs and web applications with Node.js, known for its simplicity and flexibility.
- **cors**: Middleware that helps manage cross-origin resource sharing, enabling your server to accept requests from different domains.
- **mysql2**: A MySQL client for Node.js that provides fast and reliable integration with MySQL databases, including support for Promises.
- **sequelize**: An ORM (Object Relational Mapping) library for Node.js that simplifies interactions with the database by using JavaScript instead of SQL queries.
- **nodemon**: A utility that automatically restarts your Node.js application whenever files change, helping speed up development by avoiding manual restarts.

To install these packages, run the following command in the backend folder:

```bash
npm install express cors mysql2 sequelize
npm install --save-dev nodemon
```
To start the backend server with nodemon, run:
```
nodemon app.js
```
## Frontend Packages
- react-router-dom: A library that helps you manage navigation and routing within your React application, making it easy to switch between different pages.
- bootstrap: A responsive CSS framework that makes it quick and easy to design professional-looking web pages without custom styling.
```
npm install react-router-dom bootstrap
```
To start the frontend React app, run:
```
npm start
```
## API Endpoints

| Method | Endpoint                | Description                          |
|--------|-------------------------|--------------------------------------|
| GET    | `/comic-books`      	   | Retrieve all comic books             |
| GET    | `/comic-books/:id`      | Retrieve a comic book by ID          |
| POST   | `/comic-books`          | Create a new comic book              |
| PUT    | `/comic-books/:id`      | Update an existing comic book        |
| DELETE | `/comic-books/:id`      | Delete a comic book                  |

## Postman Collection

The Postman collection for the Comic Book Management API includes the following requests:

- **Get All Comic Books**
  - **Method**: GET
  - **Endpoint**: `/comic-books`
  - ![image](https://github.com/user-attachments/assets/bf764919-04ec-4860-9b8a-57fd171fb2e8)
  - **Query Parameters**:
    - `sortBy`: (optional) Specify the field to sort by, e.g., `price`, `year_of_publication`.
    - `order`: (optional) Specify the order of sorting, either `asc` (ascending) or `desc` (descending). Default is `asc`.
    - ![image](https://github.com/user-attachments/assets/35606ff7-3d18-4613-b2de-25aff3ba7055)
- **Get Comic Book by ID**
  - **Method**: GET
  - **Endpoint**: `/comic-books/:id`
  - ![image](https://github.com/user-attachments/assets/1e9c2941-7422-44c0-9180-ce8c6c030d19)

- **Create a New Comic Book**
  - **Method**: POST
  - **Endpoint**: `/comic-books`
  - **Body**:
    ```json
    {
      "book_name": "Comic Title",
      "author_name": "Author Name",
      "year_of_publication": 2022,
      "price": 9.99,
      "category": "Genre",
      "book_condition": "New",
      "user_id": 1,
    }
    ```
  -![image](https://github.com/user-attachments/assets/11a3a85c-5651-45f0-8b87-2e7fcb75debb)
  - **Validations**
  -![image](https://github.com/user-attachments/assets/234cd97d-d40f-47bc-89e4-719634415fa1)
- **Update a Comic Book**
  - **Method**: PUT
  - **Endpoint**: `/comic-books/:id?user_id=ofManager`
  - **Body**:
    ```json
    {
      "book_name": "Updated Comic Title",
      "author_name": "Updated Author Name",
      "year_of_publication": 2022,
      "price": 10.99,
      "category": "Updated Genre",
      "book_condition": "Used"
    }
    ```
  -![image](https://github.com/user-attachments/assets/274426e5-0584-4e5d-9ab8-552590059b2f)
  -![image](https://github.com/user-attachments/assets/94e56784-b71a-44c6-a062-40b987d435ec)
- **Delete a Comic Book**
  - **Method**: DELETE
  - **Endpoint**: `/comic-books/:id`
  - ![image](https://github.com/user-attachments/assets/89437348-e538-47e7-ab24-799880778416)
  - ![image](https://github.com/user-attachments/assets/ee28616d-5990-4adc-8623-ed55ece90c9a)




