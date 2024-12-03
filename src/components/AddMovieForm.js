import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    if (!title.trim()) return; // Prevent adding empty movies
    onAddMovie(title); // Call the passed function with the movie title
    setTitle(""); // Clear the input field
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
