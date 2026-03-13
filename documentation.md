# Project: User Management API

This project is a back-end REST API built with Node.js, Express, MongoDB, and JWT authentication.

## Tech Stack
- **Node.js**: Runtime environment
- **Express.js**: Web framework for building APIs
- **MongoDB**: NoSQL database (via Mongoose ODM)
- **JWT (JSON Web Token)**: Secure authentication
- **bcryptjs**: Password hashing for security
- **dotenv**: Handling environment variables

## Features
- **User Registration**: Create a new user account with a name, email, and password.
- **User Login**: Authenticate existing users and receive a JWT token.
- **Protected Routes**: Get all users, get a single user, update, and delete users (requires valid token).
- **CRUD Operations**: Create (Register), Read (Get All, Get Single), Update, and Delete users.
- **Password Security**: Passwords are securely hashed before being stored in the database.

## API Endpoints

### Public Routes
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Authenticate and get a token

### Private/Protected Routes (Header `Authorization` required)
- `GET /api/users`: Get all registered users
- `GET /api/users/:id`: Get a specific user by their ID
- `PUT /api/users/:id`: Update user details
- `DELETE /api/users/:id`: Remove a user from the database

## How to Run the Project
1. Install dependencies: `npm install`
2. Update `.env` with your MongoDB URI.
3. Start the server: `npm run dev` (using nodemon) or `npm start`.

## Testing Tool
- Postman / Thunder Client

## Problem Faced & Solutions
1. Nodemon Error
- npm run dev
- I encountered an error where nodemon was not recognized as a command.
Reason:
- This happened because nodemon was not installed globally or in the project dependencies.
Solution:
- I installed nodemon using the following command:
- npm install nodemon --save-dev
- npm install -g nodemon

2. MongoDB Connection Error
uring the initial setup, the server failed to connect to the MongoDB database.

Reason:
- The error occurred due to an incorrect MongoDB connection string in the .env file or because the environment variables were not properly loaded.

Solution:
- I verified the MongoDB URI and ensured the .env file was correctly configured.

3. Postman Testing error
- Checked Steps from AI tools and then made run test.
- 200 successfully runned all.

- Images

