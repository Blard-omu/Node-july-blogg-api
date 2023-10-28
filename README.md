# Node API Documentation

## Introduction

This documentation provides details about the endpoints and functionalities of this project." The API serves as a platform for various CRUD (Create, Read, Update, Delete) operations for both users and blogs.

Base URL: `http://localhost:8080/api/v1`


## Endpoints

<!-- ### Users

#### 1. **Create a User**

- **Endpoint**: `/register`
- **HTTP Method**: POST
- **Description**: Create a new user.
- **Request Body**: User data includes `username`, `email`, and `password`.
- **Response**: User created successfully.


#### 2. **login a User**

- **Endpoint**: `/login`
- **HTTP Method**: POST
- **Description**: Create a new user.
- **Request Body**: User data incldes: `email`, and `password`.
- **Response**: User logged in successfully.
 -->
### AUthentification

#### 1. **User Authentication**

- **Endpoint**: `/users/login`
- **HTTP Method**: POST
- **Description**: Authenticate and log in a user.
- **Request Body**: User credentials (`email` and `password`).
- **Response**: Authentication token and user details upon successful login.

#### 2. **User Registration**

- **Endpoint**: `/users/register`
- **HTTP Method**: POST
- **Description**: Register a new user.
- **Request Body**: User data including `username`, `email`, and `password`.
- **Response**: Success message upon successful registration.



#### 2. **Get All Users**

- **Endpoint**: `/users`
- **HTTP Method**: GET
- **Description**: Retrieve a list of all users.
- **Response**: Users retrieved successfully.

#### 3. **Get User by ID**

- **Endpoint**: `/users/{user_id}`
- **HTTP Method**: GET
- **Description**: Retrieve a specific user by their unique `_id`.
- **Response**: User object.

#### 4. **Update User**

- **Endpoint**: `/users/{user_id}`
- **HTTP Method**: PUT
- **Description**: Update an existing user by their `_id`.
- **Request Body**: Updated user data.
- **Response**: Success message and updated user details.

#### 5. **Delete User**

- **Endpoint**: `/users/{user_id}`
- **HTTP Method**: DELETE
- **Description**: Delete a user by their `_id`.
- **Response**: Success message.

---

### Blogs

#### 1. **Create Blog**

- **Endpoint**: `/blogs/creaate`
- **HTTP Method**: POST
- **Description**: Create a new blog.
- **Request Body**: Blog data including `title`, `content`, `author`, and optional `state`.
- **Response**: Success message and blog details.

#### 2. **Get All Blogs**

- **Endpoint**: `/blogs/all`
- **HTTP Method**: GET
- **Description**: Retrieve a list of all blogs.
- **Response**: List of blog objects.

#### 3. **Get Blog by ID**

- **Endpoint**: `/blogs/{blog_id}`
- **HTTP Method**: GET
- **Description**: Retrieve a specific blog by its unique `_id`.
- **Response**: Blog object.

#### 4. **Update Blog**

- **Endpoint**: `/blogs/{blog_id}`
- **HTTP Method**: PUT
- **Description**: Update an existing blog by its `_id`.
- **Request Body**: Updated blog data.
- **Response**: Success message and updated blog details.

#### 5. **Delete Blog**

- **Endpoint**: `/blogs/{blog_id}`
- **HTTP Method**: DELETE
- **Description**: Delete a blog by its `_id`.
- **Response**: Success message.


## Error Handling

The API handles errors gracefully and provides informative error messages for various scenarios, including invalid requests, authentication issues, and server errors.

## Authentication

User authentication is required for certain endpoints. These endpoints will return an authentication token upon successful login, which should be included in the `Authorization` header for protected routes.

## API Testing

To test the API and explore its functionality, you can use tools like Postman or any API testing tool of your choice.

## Conclusion

This documentation should serve as a guide to the "node-api," enabling developers to interact with and utilize its endpoints for user and blog management.