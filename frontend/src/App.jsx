import FavoritesPage from "./Pages/FavoritesPage";
import HomePage from "./Pages/HomePage";
import RecommendedPage from "./Pages/RecommendedPage";
import SearchPage from "./Pages/SearchPage";
import Navbar from "./components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recommended" element={<RecommendedPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
