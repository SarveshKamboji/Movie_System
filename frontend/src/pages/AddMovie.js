import React, { useState } from "react";
import { addMovie } from "../services/movieService";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const [movie, setMovie] = useState({
    movieName: "",
    movieBudget: "",
    movieRD: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setMovie((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    addMovie(movie)
      .then(() => {
        alert("Movie added successfully");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Error adding movie");
      });
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="card-title mb-3 text-center">Add Movie</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Movie Name</label>
                <input
                  type="text"
                  name="movieName"
                  className="form-control"
                  value={movie.movieName}
                  onChange={handleChange}
                  required
                  placeholder="Enter movie name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Budget</label>
                <input
                  type="number"
                  name="movieBudget"
                  className="form-control"
                  value={movie.movieBudget}
                  onChange={handleChange}
                  required
                  placeholder="Enter budget"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Release Date</label>
                <input
                  type="date"
                  name="movieRD"
                  className="form-control"
                  value={movie.movieRD}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Add Movie
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
