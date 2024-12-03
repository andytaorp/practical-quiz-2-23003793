import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!title.trim()) return; 
    onAddMovie(title); 
    setTitle(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie Title..."
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}
