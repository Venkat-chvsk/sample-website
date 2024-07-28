import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Welcome from "./Welcome";

function App(){

    return(
        // <div className="container">
        // <Register />
        // </div>
        <Router>
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
        </Routes>
        </Router>

    )
};

export default App;