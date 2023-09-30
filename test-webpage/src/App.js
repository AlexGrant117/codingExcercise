import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeList from './pages/HomeList'
import Users from './pages/users';
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<HomeList/>}/>
          <Route exact path="/HomeList" element={<HomeList/>}/>
          <Route exact path="/Users/:UserID" element={<Users/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );
}

export default App;
