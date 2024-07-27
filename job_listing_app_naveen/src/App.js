import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
      {/* <Login /> */}
    </div>
  );
}

export default App;
