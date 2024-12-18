import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import UserDetailPage from './pages/UserDetailPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserListPage />} />
      <Route path="/user/:id" element={<UserDetailPage />} />
    </Routes>
  </Router>
);

export default App;