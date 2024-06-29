import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import WorkDetail from "./pages/WorkDetail";
import Arts from "./pages/Arts";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Router basename="/HiiragiPortfolio">
      <ScrollToTop />
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/detail/:workid" element={<WorkDetail />} />
          <Route path="/arts" element={<Arts />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
