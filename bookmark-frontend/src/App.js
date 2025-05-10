import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");
  const [search, setSearch] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    const res = await axios.get(`${API}/list`);
    setBookmarks(res.data);
  };

  const searchBookmarks = async (query) => {
    if (!query) {
      fetchBookmarks();
      return;
    }
    const res = await axios.get(`${API}/search?q=${query}`);
    setBookmarks(res.data);
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const addBookmark = async () => {
    await axios.post(`${API}/add`, {
      title,
      url,
      tags: [tag],
    });
    setTitle("");
    setUrl("");
    setTag("");
    fetchBookmarks();
  };

  const deleteBookmark = async (url) => {
    await axios.post(`${API}/delete`, { url });
    fetchBookmarks();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📚 Bookmark Manager</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      {" "}
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL"
      />
      {" "}
      <input
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Tag"
      />
      {" "}
      <button onClick={addBookmark}>Add</button>

      <hr />

      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          searchBookmarks(e.target.value);
        }}
        placeholder="Search by title..."
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />

      {bookmarks.map((b, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <strong>{b.title}</strong> – <a href={b.url}>{b.url}</a> [{b.tags.join(", ")}]
          <button onClick={() => deleteBookmark(b.url)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
