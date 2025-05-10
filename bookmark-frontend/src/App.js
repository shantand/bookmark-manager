import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    const res = await axios.get(`${API}/list`);
    setBookmarks(res.data);
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const addBookmark = async () => {
    await axios.post(`${API}/add`, {
      title,
      url,
      tags: [tag]
    });
    setTitle(""); setUrl(""); setTag("");
    fetchBookmarks();
  };

  const deleteBookmark = async (url) => {
    await axios.post(`${API}/delete`, { url });
    fetchBookmarks();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📚 Bookmark Manager</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />{" "}
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />{" "}
      <input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Tag" />{" "}
      <button onClick={addBookmark}>Add</button>
      <hr />
      {bookmarks.map((b, i) => (
        <div key={i}>
          <strong>{b.title}</strong> – <a href={b.url}>{b.url}</a> [{b.tags.join(", ")}]
          <button onClick={() => deleteBookmark(b.url)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;

