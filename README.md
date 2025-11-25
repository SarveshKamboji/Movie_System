# 🎬 MovieCenter MERN CRUD Application

MovieCenter is a complete full-stack MERN application built for performing full CRUD operations on movie records with additional features including live search, search by release date, delete by movie name, display all movies, and record updating. The project demonstrates modular architecture, clean UI using Bootstrap, React Router navigation, and MongoDB integration with Express backend.

---

## 🚀 Features

- Add new movies with Name, Budget, and Release Date
- Update existing movie data on a separate page
- Delete movies using either ID or movie name
- Search movies by name with live typing (e.g., typing "b" shows all movies starting or containing "b")
- Search by Release Date using dedicated button
- Display all movies on demand
- Modular pages and reusable UI components
- Clean and responsive Bootstrap UI

---

## 🏗 Tech Stack

### Frontend (React)
- React JS (Functional Components + Hooks)
- React Router DOM
- Axios
- Bootstrap CSS

### Backend (Node & Express)
- Express REST API
- Mongoose + MongoDB
- CORS enabled

---

## 📂 Project Structure

### Frontend
moviecenter-frontend/
- src/
  - pages/
    - MovieList.js
    - AddMovie.js
    - UpdateMovie.js
    - SearchPage.js
  - components/
    - NavbarComponent.js
  - services/
    - movieService.js
  - App.js
  - index.js

### Backend
MovieCenterBackend/
- server.js
- package.json

---


---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /movie | Get all movies |
| POST | /movie | Add new movie |
| GET | /movie/:id | Get movie by ID |
| PUT | /movie/:id | Update movie |
| DELETE | /movie/:id | Delete by ID |
| GET | /movie/search/:name | Search by movie name |
| GET | /movie/date/:date | Search by release date |
| DELETE | /movie/byname/:name | Delete by movie name |

---

## 🧠 Learning Outcomes

- MERN full-stack application architecture
- Implementing CRUD in React with axios
- Modular UI development and route-based navigation
- Working with MongoDB and Mongoose schema validation
- Building production-friendly REST API with Express

---

## 💡 Future Enhancements

- Toast notifications (react-toastify)
- Bootstrap modal confirmation for delete
- Pagination & sorting
- JWT authentication & login page
- Deployment on Vercel & Render

---

## 📸 Screenshots


Display
<img width="1686" height="329" alt="image" src="https://github.com/user-attachments/assets/bd134d1f-2ee1-4573-b5b3-600fcf526536" />

Update
<img width="1671" height="585" alt="image" src="https://github.com/user-attachments/assets/6b4fd447-ad7e-4bae-8463-d092c396b53f" />

Add
<img width="1641" height="550" alt="image" src="https://github.com/user-attachments/assets/e9b3093a-920a-4a48-8d5a-9b79515434c2" />

Search
<img width="1715" height="527" alt="image" src="https://github.com/user-attachments/assets/13beedcf-278b-410a-9822-6bbdfc79356f" />


---


# MovieCenter MERN App - Setup Instructions

## Clone the repository
git clone https://github.com/kambojipranav/React_Movie_System.git
cd moviecenter

## Backend Setup
cd backend
npm install
npm run dev
# Server running at http://localhost:5000

## Frontend Setup
cd frontend
npm install
npm start
# App running at http://localhost:3000


