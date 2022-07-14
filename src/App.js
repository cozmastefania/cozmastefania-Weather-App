import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import "./Style.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
