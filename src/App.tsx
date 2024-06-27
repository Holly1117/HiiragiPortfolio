import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Arts from "./pages/Arts";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <Router basename="/HiiragiPortfolio">
      <ScrollToTop />
      <Header />
      <Container maxW="container.md" pt={10}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/arts" element={<Arts />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
