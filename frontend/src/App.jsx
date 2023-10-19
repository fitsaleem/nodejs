import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Regester from "./pages/Regester";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PasswordUpdate from "./pages/PasswordUpdate";


export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* header */}
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/regester" element={<Regester/>} />
          <Route path="/forget-password" element={<PasswordUpdate/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
