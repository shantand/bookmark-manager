# 🔖 Personal Bookmark Manager

A simple full-stack application to save, view, search, and delete personal bookmarks.

## 🧰 Tech Stack

- **Backend**: Python Flask, Flask-CORS, PyMongo
- **Frontend**: React.js, Axios
- **Database**: MongoDB (local)

---

## 🚀 Features

- Add new bookmarks with title, URL, and tags
- View all saved bookmarks
- Delete bookmarks
- Search bookmarks by title
- Built to run locally on macOS

---

## 🖥️ Setup Instructions

### 1. 🗃️ Install MongoDB Locally (macOS)

```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

Verify with:
```bash
mongosh

### 2. ⚙️ Run Backend (Flask)
```bash
# Inside the backend folder
cd bookmark-backend
python3 -m venv venv
source venv/bin/activate
pip install flask flask-cors pymongo

# Run the server
python app.py
API will be available at http://localhost:5000

### 3. 🌐 Run Frontend (React)

```bash
# Inside the frontend folder
cd bookmark-frontend
npm install

# Fix for OpenSSL error (Node 17+)
export NODE_OPTIONS=--openssl-legacy-provider

# Run the app
npm start
Frontend will be available at http://localhost:3000

### 🗂️ API Endpoints
POST /add → Add a new bookmark

GET /list → Get all bookmarks

GET /search?q=term → Search bookmarks by title

POST /delete → Delete bookmark by URL

### 📁 Project Structure

bookmark-backend/
  └── app.py
bookmark-frontend/
  └── src/
      └── App.js
