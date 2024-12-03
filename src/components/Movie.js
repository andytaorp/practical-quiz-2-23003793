import React from "react";

/**
 * A single movie item in the movie list, with a checkbox to mark it
 * watched, a text span for the title, and a delete button.
 */
export default function Movie({ movie, onToggleWatched, onDeleteMovie }) {  
  return (
    <li
    style={{ textDecoration: movie.watched ? "line-through" : "none" }}
    >
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={() => onToggleWatched(movie.id)}
      />
      <span>{movie.title}</span>
      <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>  
    </li>
  );
}


