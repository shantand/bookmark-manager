from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["bookmarkdb"]
collection = db["bookmarks"]

@app.route("/add", methods=["POST"])
def add_bookmark():
    data = request.json
    data["date_added"] = datetime.utcnow()
    collection.insert_one(data)
    return jsonify({"message": "Bookmark added!"}), 201

@app.route("/list", methods=["GET"])
def list_bookmarks():
    bookmarks = list(collection.find({}, {"_id": 0}))
    return jsonify(bookmarks)

@app.route("/search", methods=["GET"])
def search():
    query = request.args.get("q", "")
    results = list(collection.find({"title": {"$regex": query, "$options": "i"}}, {"_id": 0}))
    return jsonify(results)

@app.route("/delete", methods=["POST"])
def delete():
    url = request.json.get("url")
    collection.delete_one({"url": url})
    return jsonify({"message": "Bookmark deleted!"})

if __name__ == "__main__":
    app.run(debug=True)


