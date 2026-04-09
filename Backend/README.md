# Élan - Backend API

This is the server-side application for **Élan**, providing a robust RESTful API to power the luxury perfume e-commerce experience.

## 🚀 Key Technologies
- **Node.js**: Asynchronous event-driven JavaScript runtime.
- **Express.js**: Fast, unopinionated, minimalist web framework.
- **MongoDB + Mongoose**: Scalable NoSQL database with elegant object modeling.
- **JWT (JSON Web Tokens)**: Secure stateless authentication.
- **BcryptJS**: Industry-standard password hashing.
- **Multer**: Middleware for handling `multipart/form-data` (image uploads).
- **Morgan**: HTTP request logger for development.

## 📦 API Features
- **Authentication**: User registration, login, and authorization.
- **Product Management**: Full CRUD operations for perfume listings.
- **Order Processing**: Handling customer orders and transaction records.
- **Review System**: Managing customer feedback and product ratings.
- **Middlewares**: Admin-only routes, authentication guards, and global error handling.

## 🛠️ scripts
- `npm start`: Runs the server using standard `node`.
- `npm run dev`: Starts the server with `nodemon` for automatic restarts on code changes.

## 📂 Structure Highlights
- `/src/models`: Mongoose schemas for Users, Products, Orders, and Reviews.
- `/src/controllers`: Logic for processing requests and returning responses.
- `/src/routes`: API route definitions.
- `/src/middlewares`: Security and utility functions.
- `/src/config`: Connection logic for MongoDB and environment variables.

---
*For full project documentation, including frontend setup, refer to the [root README](../README.md).*
