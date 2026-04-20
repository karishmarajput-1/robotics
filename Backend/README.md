# ArRobotics Backend API

A Node.js/Express backend API with MySQL database for the ArRobotics project.

## Features

- User Authentication (Register & Login with JWT)
- User Profiles
- Contact Form Management
- Job Listings Management
- Role-based Access Control (Admin)

## Prerequisites

- Node.js (v14+)
- MySQL (v5.7+)
- npm

## Setup Instructions

### 1. Database Setup

Create a MySQL database and user:

```sql
CREATE DATABASE arrobo;
CREATE USER 'arrobo_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON arrobo.* TO 'arrobo_user'@'localhost';
FLUSH PRIVILEGES;
```

Or use root user (default in .env.example)

### 2. Environment Configuration

Copy `.env.example` to `.env` and update with your database credentials:

```bash
cp .env.example .env
```

Edit `.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=arrobo
DB_PORT=3306
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (requires token)

### Contacts
- `POST /api/contacts/submit` - Submit contact form
- `GET /api/contacts/all` - Get all contacts (admin only)
- `PUT /api/contacts/:id/status` - Update contact status (admin only)

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get job by ID
- `POST /api/jobs` - Create job (admin only)
- `PUT /api/jobs/:id` - Update job (admin only)
- `DELETE /api/jobs/:id` - Delete job (admin only)

## Authentication

Include JWT token in request headers:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

## Database Schema

### Users Table
- id, name, email, password, phone, role, timestamps

### Contacts Table
- id, name, email, subject, message, status, timestamp

### Jobs Table
- id, title, description, location, salary, type, requirements, postedBy, timestamps

### Applications Table
- id, jobId, userId, resume, coverLetter, status, timestamp

## Testing with cURL

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"password123","phone":"1234567890"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Submit Contact
```bash
curl -X POST http://localhost:5000/api/contacts/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane","email":"jane@example.com","subject":"Hello","message":"Test message"}'
```

### Get Jobs
```bash
curl http://localhost:5000/api/jobs
```

## Frontend Integration

Install axios in your React frontend:

```bash
npm install axios
```

Create an API client (`src/services/api.js`):

```javascript
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const setToken = (token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export default API;
```

## Troubleshooting

### MySQL Connection Error
- Ensure MySQL service is running
- Check DB credentials in .env
- Verify database exists

### Port Already in Use
```bash
# Windows: Find and kill process using port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac:
lsof -i :5000
kill -9 <PID>
```

### JWT Token Issues
- Check JWT_SECRET is set in .env
- Token expires after 7 days
- Include 'Bearer' prefix in Authorization header

## Project Structure

```
backend/
├── config/
│   ├── database.js        # MySQL connection pool
│   └── schema.js          # Table creation
├── controllers/
│   ├── authController.js  # Auth logic
│   ├── contactController.js
│   └── jobController.js
├── middleware/
│   └── auth.js            # JWT verification
├── routes/
│   ├── authRoutes.js
│   ├── contactRoutes.js
│   └── jobRoutes.js
├── .env.example
├── package.json
└── server.js              # Main entry point
```

## License

MIT
