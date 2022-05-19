import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import Login from "./pages/Login";
import  News  from "./pages/News";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import {useState} from 'react';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [isAuth, setIsAuth] = useState(false);
  
  return (
    
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="News" element={<News/>} />
      <Route  path="Login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="Users" element={<Users/>} />
      <Route path="*" element={<PageNotFound/>} />
       
    </Routes>
  
    
  );
}

export default App;
