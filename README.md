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
```

Create a .env file in root dir with

```bash
JWT_SECRET=your_jwt_secret_key
```

Have MongoDB run locally at 

```bash
mongodb://127.0.0.1:27017/short-url-project
npm start
```
