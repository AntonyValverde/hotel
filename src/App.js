import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Information from "./components/Information";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/servicios" element={<Article />} />
          <Route path="/information" element={<Information />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
