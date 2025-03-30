import MovieGrid from "./components/MovieGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-stone-600 p-[0.5px]"></div>
      <MovieGrid />
    </>
  );
}

export default App;
