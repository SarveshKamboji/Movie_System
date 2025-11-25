import React, { useState } from "react";
import {
  searchByName,
  searchByDate,
  deleteByName,
  getMovies
} from "../services/movieService";

function SearchPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  function handleNameChange(e) {
    const value = e.target.value;
    setName(value);

    // live search when typing
    if (value.trim() === "") {
      setResults([]);
      return;
    }

    searchByName(value)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error searching by name");
      });
  }

  function handleSearchByDate() {
    if (!date) {
      alert("Select a date first");
      return;
    }

    searchByDate(date)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error searching by date");
      });
  }

  function handleDeleteByName() {
    if (!name.trim()) {
      alert("Enter movie name to delete");
      return;
    }

    if (!window.confirm(`Delete movie with name: ${name}?`)) return;

    deleteByName(name)
      .then(() => {
        alert("Deleted (if movie existed)");
        // refresh search results
        if (name.trim() !== "") {
          return searchByName(name).then((res) => setResults(res.data));
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error deleting movie");
      });
  }

  function handleDisplayAll() {
    getMovies()
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching movies");
      });
  }

  return (
    <div>
      <h3 className="mb-3 text-center">Search & Manage Movies</h3>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Search by Movie Name</h5>
              <p className="text-muted small mb-2">
                Type letters (e.g. <strong>b</strong>) to see all names
                containing that text.
              </p>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Start typing movie name..."
                value={name}
                onChange={handleNameChange}
              />

            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Search by Release Date</h5>
              <p className="text-muted small mb-2">
                Choose a date and click search.
              </p>
              <div className="d-flex">
                <input
                  type="date"
                  className="form-control me-2"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSearchByDate}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0">Search Results</h5>
        <button className="btn btn-outline-secondary btn-sm" onClick={handleDisplayAll}>
          Display All Movies
        </button>
      </div>

      {results.length === 0 ? (
        <p className="text-muted">No movies to show. Try searching or display all.</p>
      ) : (
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-striped table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Movie Name</th>
                <th>Budget</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              {results.map((m) => (
                <tr key={m._id}>
                  <td>{m.movieName}</td>
                  <td>₹{m.movieBudget}</td>
                  <td>{new Date(m.movieRD).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
