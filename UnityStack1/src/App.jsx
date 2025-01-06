import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home"; // Assuming Home is in the components folder
import Question from "./components/Question";
import Login from "./components/login";
import OptionsSign from "./components/optionsighn"; // Updated to use the corrected name
import Studentsighnup from "./components/studentsighnup";

const App = () => {
  return (
    <Router>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/login" element={<Login />} />
        <Route path="/optionsighn" element={<OptionsSign />} /> {/* Corrected */}
        <Route path="/studentsighnup" element={<Studentsighnup />} />
      </Routes>
    </Router>
  );
};

export default App;
