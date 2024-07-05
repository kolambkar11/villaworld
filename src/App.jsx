import logo from "./assets/img/logo.png";
import "./App.css";
import Villadetailed from "./components/villadetailed/Villadetailed";
import Villalist from "./components/villalist/Villalist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/footer";
import Notfound from "./components/notfound/Notfound";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/villaworld/villadetailed" element={<Villadetailed />} />
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
