import logo from "./assets/img/logo.png";
import "./App.css";
import Villadetailed from "./components/villadetailed/Villadetailed";
import Villalist from "./components/villalist/Villalist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import NotFound from "./components/notfound/Notfound";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            activeClassName="active_class"
            exact
            path="/villaworld/villasdetailed"
            element={<Villadetailed />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
      <Villalist />
    </>
  );
}

export default App;
