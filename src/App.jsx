import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import Ongoing from "./pages/Ongoing";
import Completed from "./pages/Completed";
import Goals from "./pages/Goals";
import Progress from "./pages/Progress";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
