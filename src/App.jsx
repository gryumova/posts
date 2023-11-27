import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.css'
import About from "./pages/About";
import Posts from "./pages/Posts";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="*" element={<About/>} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
