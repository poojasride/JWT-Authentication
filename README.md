# JWT Authentication API (Node.js, Express, MongoDB, ES6)

## Project Overview

This project implements a secure User Authentication and Authorization
system using:

-   Node.js
-   Express.js
-   MongoDB with Mongoose
-   JWT (JSON Web Token)
-   ES6 Modules
-   MVC Architecture

Features: - User Registration - User Login - JWT Token Generation -
Protected Profile Route - Middleware-based Authentication

------------------------------------------------------------------------

# Base URL

http://localhost:5000/api/auth

------------------------------------------------------------------------

# Authentication

Protected routes require:

Authorization: Bearer YOUR_TOKEN

------------------------------------------------------------------------

# API Endpoints Documentation

## 1. Register User

Endpoint: POST /register

Description: Creates a new user account.

Request Body: { "username": "pooja", "email": "pooja@gmail.com",
"password": "123456" }

Success Response (201): { "message": "User registered successfully" }

Error Response (400): { "message": "User already exists" }

------------------------------------------------------------------------

## 2. Login User

Endpoint: POST /login

Description: Authenticates user and returns JWT token.

Request Body: { "email": "pooja@gmail.com", "password": "123456" }

Success Response (200): { "message": "Login successful", "token":
"your_jwt_token" }

------------------------------------------------------------------------

## 3. Get Profile

Endpoint: GET /profile

Headers: Authorization: Bearer YOUR_TOKEN

Success Response (200): { "message": "Protected data", "user": { "\_id":
"user_id", "username": "pooja", "email": "pooja@gmail.com" } }

------------------------------------------------------------------------

# Installation

npm install

------------------------------------------------------------------------

# Run Project

npm run dev

------------------------------------------------------------------------

# Environment Variables

PORT=5000 MONGO_URI=your_mongodb_uri JWT_SECRET=your_secret

------------------------------------------------------------------------

# Host Url

https://jwt-authentication-j743.onrender.com

