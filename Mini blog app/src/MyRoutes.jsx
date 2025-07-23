import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import CreateBlog from "./Pages/CreateBlog";
import EditBlog from "./Pages/EditBlog";
import Layout from "./Pages/Layout";
import ViewBlog from "./Pages/ViewBlog";
import BlogDetail from "./Pages/BlogDetail";

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
          {!isLoggedIn && <Route path="/" element={<LoginPage />} />}
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/edit" element={<EditBlog />} />
            <Route path="/view" element={<ViewBlog />} />
            <Route path="/detail" element={<BlogDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
