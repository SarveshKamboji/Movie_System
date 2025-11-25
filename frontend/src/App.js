import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import MovieList from "./pages/MovieList";
import AddMovie from "./pages/AddMovie";
import UpdateMovie from "./pages/UpdateMovie";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/update/:id" element={<UpdateMovie />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
