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
```
Verify it's running:

```bash
mongosh
```
---

### 2. ⚙️ Run Backend (Flask)

```bash
# Inside the backend folder
cd bookmark-backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install flask flask-cors pymongo

# Start Flask server
python3 app.py
```
Your Flask API will be available at:
```bash
http://localhost:5000
```
---
### 3. 🌐 Run Frontend (React)

```bash
# Inside the frontend folder
cd bookmark-frontend

# Install dependencies
npm install

# If you're using Node 17+, fix OpenSSL issue
export NODE_OPTIONS=--openssl-legacy-provider

# Start React app
npm start
```
React app will run at:
```bash
http://localhost:3000
```
---
