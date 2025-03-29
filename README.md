# Assignment-backend

This is the backend assignment built using Node.js, Express, and MongoDB.

## Features
- User authentication (Signup, Login, Logout)
- Profile management (View and Edit Profile)
- JWT-based authentication
- Validation for user inputs

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Postman (optional, for API testing)

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/kingoftypos/Assignment-backend.git
   cd Assignment-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   MONGO_URI="your-mongodb-connection-string"
   JWT_SECRET="your-secret-key"
   PORT=8080
   ```

4. Start the server:
   - For production:
     ```bash
     npm start
     ```
   - For development (with hot-reloading):
     ```bash
     npm run dev
     ```

5. The server will run on `http://localhost:8080`.

## API Documentation

You can use Postman to test the APIs. Import the following Postman collection for detailed API documentation:

[Postman Documentation Link](https://www.postman.com/)

### Sample API Endpoints
- **Signup**: `POST /signup`
- **Login**: `POST /login`
- **Logout**: `POST /logout`
- **View Profile**: `GET /profile/view`
- **Edit Profile**: `PATCH /profile/edit`

## Sample `.env` File
```plaintext
MONGO_URI="mongodb+srv://username:password@cluster.mongodb.net/"
JWT_SECRET="this-is-your-secret-key"
PORT=8080
```

## License
This project is licensed under the ISC License.