import React from "react";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <div className="p-3 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Blog Website</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
};

export default App;
