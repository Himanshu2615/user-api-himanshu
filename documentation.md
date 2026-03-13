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
