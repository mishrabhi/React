import { React } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/home";
import Login from "./components/login";
import User from "./components/user";

import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/user">Users</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
