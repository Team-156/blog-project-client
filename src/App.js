import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/registration" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
