# Short URL API

A simple URL shortener REST API built with Node.js, Express, and MongoDB. It allows users to generate short codes for long URLs and automatically tracks how many times the shortened link has been visited.

## Features
- Generate short, unique URLs using `shortid`.
- Automatically redirect users to the original URL when accessing the short link.
- Track total clicks/visits for each shortened URL.
- Structured with MVC architecture (Models, Controllers, Routes).
- Custom middleware for logging and error handling.

## Tech Stack
- **Node.js**
- **Express.js** (Web Framework)
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **dotenv** (Environment variable management)
- **shortid** (Unique ID generator)

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) account and cluster (or local instance)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/soumyyyadip/miniURL.git
   cd Short_URL
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the environment variables (see below).

4. Start the server:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file with the following keys:

```env
# Optional: The port your server will run on (default is 5000)
PORT=3000

# Required: Your MongoDB connection string
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>

# Required: Base URL of your application (used for generating the short URL link)
BASE_URL=http://localhost:3000
```

## API Endpoints

### 1. Create a Short URL
- **Endpoint**: `POST /shorten`
- **Description**: Generates a short URL for the provided original URL.
- **Request Body** (JSON):
  ```json
  {
      "originalUrl": "https://www.example.com"
  }
  ```
- **Response**: Returns the created URL object containing `shortCode`, `shortUrl`, `originalUrl`, and `clicks`.

### 2. Redirect to Original URL
- **Endpoint**: `GET /:code`
- **Description**: Redirects the client to the original URL associated with the short code. Increments the `clicks` counter.

### 3. Get All URLs
- **Endpoint**: `GET /`
- **Description**: Retrieves an array of all URLs stored in the database, along with their analytics (clicks).

## License
ISC
