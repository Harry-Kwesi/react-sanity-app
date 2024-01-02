import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import MoviesListPage from "./pages/moviesList";
import PersonsListPage from "./pages/personList";
import Movie from "./pages/moviePage";
import Person from "./pages/personPage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MoviesListPage />} />
              <Route path="persons" element={<PersonsListPage />} />
              <Route path="movie" element={<Movie />} />
              <Route path="movie" element={<Person />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
