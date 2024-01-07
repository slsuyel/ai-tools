
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Sidebar from "../pages/Dashboard/Sidebar.jsx";
import Navbar from "../pages/Dashboard/Navbar.jsx";


export default function WithNavbar() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}
