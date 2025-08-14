import "./styles.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobeBase from "./globe";
import LandingPage from "./LandingPage";

function App() {
  return (

    
  <div>
  
    
    <Router>
      {/* <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/globe">Globe</Link>
        <Link to="/LandingPage">About</Link>
      </div> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/globe" element={<GlobeBase />} />
     
      </Routes>
    </Router>
    
   
  </div>
    
    
  );
}

createRoot(document.getElementById("root")!).render(<App />);
