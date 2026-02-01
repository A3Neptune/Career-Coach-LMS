# Career Coach LMS

A modern Career Guidance Mentorship platform built with Next.js (SSR), Express.js, and MongoDB.

## Tech Stack
-   **Frontend**: Next.js 15+, Tailwind CSS, Framer Motion, Lucide Icons
-   **Backend**: Express.js, Mongoose (MongoDB)
-   **Deployment**: Optimized for Vercel

## Structure
-   `/client`: Next.js Frontend
-   `/server`: Express.js Backend

## Getting Started

### 1. Prerequisites
-   Node.js installed
-   MongoDB instance (Local or Atlas)

### 2. Setup
Run the following command to install dependencies for both client and server:
```bash
npm run install:all
```

### 3. Environment Variables
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
```

### 4. Running Locally
To start both client and server:
```bash
npm run dev
```

## Deployment on Vercel
1.  Push this repository to GitHub.
2.  Connect your repository to Vercel.
3.  Set the **Root Directory** to `client` for the frontend.
4.  For the backend, you can deploy the `server` folder separately or integrate it using Vercel Serverless Functions.
