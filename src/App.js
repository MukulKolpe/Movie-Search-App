import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NomineesPage from "./Pages/NomineesPage/NomineesPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nominees" element={<NomineesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
