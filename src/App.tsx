import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Header from './Components/Header';
import View from './Pages/View';
import ProtectedRoute from './Auth/ProtectedRoutes';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state: any) => state.auth?.isAuth);
  const isLoading = useSelector((state: any) => state.auth?.isLoading);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          element={<ProtectedRoute isAuth={isAuth} isLoading={isLoading}><Home /></ProtectedRoute>}
          path="/"
        />
        <Route
          element={<ProtectedRoute isAuth={isAuth} isLoading={isLoading}><Add /></ProtectedRoute>}
          path="/add"
        />
        <Route
          element={<ProtectedRoute isAuth={isAuth} isLoading={isLoading}><View /></ProtectedRoute>}
          path="/view"
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
