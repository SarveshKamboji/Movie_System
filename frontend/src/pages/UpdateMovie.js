import React, { useEffect, useState } from "react";
import { getMovieById, updateMovie } from "../services/movieService";
import { useNavigate, useParams } from "react-router-dom";

function UpdateMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    movieName: "",
    movieBudget: "",
    movieRD: ""
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(id)
      .then((res) => {
        const data = res.data.movie || res.data;
        setMovie({
          movieName: data.movieName,
          movieBudget: data.movieBudget,
          movieRD: data.movieRD ? data.movieRD.substring(0, 10) : ""
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Error loading movie");
        setLoading(false);
      });
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setMovie((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateMovie(id, movie)
      .then(() => {
        alert("Movie updated successfully");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        alert("Error updating movie");
      });
  }

  if (loading) {
    return <p>Loading movie...</p>;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="card-title mb-3 text-center">Update Movie</h3>
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

              <button type="submit" className="btn btn-warning w-100">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateMovie;
