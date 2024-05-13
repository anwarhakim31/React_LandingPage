import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./component/NavbarComp";
import FooterComp from "./component/FooterComp";
import { Home, About, Menu, Contact } from "./pages";

function App() {
  return (
    <Router>
      <NavbarComp />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      <FooterComp />
    </Router>
  );
}

export default App;
