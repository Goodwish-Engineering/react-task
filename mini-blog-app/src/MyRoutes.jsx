import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import CreateBlog from "./Pages/CreateBlog";
import EditBlog from "./Pages/EditBlog";
import Layout from "./Pages/Layout";
import ViewBlog from "./Pages/ViewBlog";
import BlogDetail from "./Pages/BlogDetail";
import Signup from "./Pages/Signup";

const MyRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      }
    };
    checkToken();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route
            path="/"
            element={
              isLoggedIn ? <Layout /> : <Navigate to="/signin" replace />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/edit" element={<EditBlog />} />
            <Route path="/view" element={<ViewBlog />} />
            <Route path="/detail" element={<BlogDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
