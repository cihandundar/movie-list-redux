import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Movies, Error } from "pages";
import { Navbar } from "components";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
