import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import TopBar from "./Components/TopBar";
import OurProcess from "./Components/OurProcess";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import ClientScreen from "./Components/ClientScreen";
import "./App.css";

function HomePage() {
  return (
    <div className="app">
      <TopBar />
      <Header />
      <OurProcess />
      <Projects />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<ClientScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
