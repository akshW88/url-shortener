# URL Shortener

A simple Express.js project that shortens URLs with user authentication using JWT.

## Features
- User signup/login
- Shorten URLs
- Redirect from short links
- Session via cookies

## Tech Stack
- Node.js
- Express
- MongoDB
- EJS

## Setup
```bash
git clone https://github.com/akshW88/url-shortener.git
cd url-shortener
npm install
Create a .env file in root dir with JWT_SECRET
Have MongoDB running locally at mongodb://127.0.0.1:27017/short-url-project, or change the URL in index.js
npm start
