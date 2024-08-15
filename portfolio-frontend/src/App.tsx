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
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b9a',
    },
    secondary: {
      main: '#fbc02d',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/resume' element={<Resume />}/>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
