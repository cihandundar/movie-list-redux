import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Movies, Error, MovieDetails } from "pages";
import { Navbar } from "components";
import { Provider } from "react-redux";
import store from "modules/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
