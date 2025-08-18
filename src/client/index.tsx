import "./styles.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobeBase from "./globe";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";

function App() {
  return (

    
  <div>
  
    
    <Router>
      
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/globe" element={<GlobeBase />} />
        <Route path="/" element={<LandingPage/>} />
     
      </Routes>
    </Router>
    
   
  </div>
    
    
  );
}

createRoot(document.getElementById("root")!).render(<App />);
