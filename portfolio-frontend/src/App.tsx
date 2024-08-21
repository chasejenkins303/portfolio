import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home'
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';



function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path='/resume' element={<Resume />}/>
      </Routes>
    </Router>
  );
}

export default App;
