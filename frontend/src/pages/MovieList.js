import React, { useEffect, useState } from "react";
import { getMovies, deleteMovieById } from "../services/movieService";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  function loadMovies() {
    getMovies()
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching movies");
      });
  }

  useEffect(() => {
    loadMovies();
  }, []);

  function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this movie?")) return;

    deleteMovieById(id)
      .then(() => {
        loadMovies();
      })
      .catch((err) => {
        console.error(err);
        alert("Error deleting movie");
      });
  }

  function handleUpdate(id) {
    navigate(`/update/${id}`);
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">All Movies</h3>
        <button className="btn btn-outline-primary" onClick={loadMovies}>
          Display All
        </button>
      </div>

      {movies.length === 0 ? (
        <p>No movies found. Add some movies!</p>
      ) : (
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>Movie Name</th>
                <th>Budget</th>
                <th>Release Date</th>
                <th style={{ width: "180px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((m) => (
                <tr key={m._id}>
                  <td>{m.movieName}</td>
                  <td>₹{m.movieBudget}</td>
                  <td>{new Date(m.movieRD).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleUpdate(m._id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(m._id)}
                    >
                      Delete (ID)
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MovieList;
