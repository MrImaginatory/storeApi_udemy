# Store API - Udemy Course Project

This repository contains the backend code for a comprehensive e-commerce store API, built using Node.js, Express.js, and MongoDB. The project is designed to provide a robust foundation for building scalable and maintainable RESTful APIs for online stores.

## 🚀 Features

* **Product Management**: Create, read, update, and delete (CRUD) operations for products.
* **Category Management**: Manage product categories to organize your store's inventory.
* **User Authentication**: Secure user authentication using JWT (JSON Web Tokens).
* **Error Handling**: Centralized error handling middleware for consistent API responses.
* **Data Validation**: Input validation to ensure data integrity and prevent invalid data entry.

## 🛠️ Technologies Used

* **Node.js**: JavaScript runtime for building the server-side application.
* **Express.js**: Web application framework for Node.js to handle routing and middleware.
* **MongoDB**: NoSQL database for storing product and user data.
* **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
* **JWT (JSON Web Tokens)**: For secure user authentication and authorization.

## 📂 Project Structure

```
storeApi_udemy/
├── controllers/          # Route handlers for business logic
├── models/               # Mongoose models for data schemas
├── routes/               # API route definitions
├── middlewares/          # Custom middleware functions
├── utils/                # Utility functions and helpers
├── database/             # Database connection setup
├── .gitignore            # Git ignore file
├── .envSample            # Sample environment variables
├── app.js                # Main application entry point
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MrImaginatory/storeApi_udemy.git
   cd storeApi_udemy
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   * Copy the `.envSample` file to `.env`.
   * Update the `.env` file with your MongoDB connection string and any other required variables.

4. Start the development server:

   ```bash
   npm start
   ```

   The API will be running on `http://localhost:5000`.

## 📚 API Endpoints

### Products

* `GET /api/products`: Retrieve all products.
* `GET /api/products/:id`: Retrieve a single product by ID.
* `POST /api/products`: Create a new product.
* `PUT /api/products/:id`: Update an existing product.
* `DELETE /api/products/:id`: Delete a product.

### Categories

* `GET /api/categories`: Retrieve all categories.
* `POST /api/categories`: Create a new category.
* `PUT /api/categories/:id`: Update an existing category.
* `DELETE /api/categories/:id`: Delete a category.


Ensure you have a test database set up and configured in your `.env` file.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

