import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const Submit = () => {
    navigate("/login");
  };
  const About = () => {
    navigate("/About");
  };
  const Home = () => {
    navigate("/home");
  };
  const Service = () => {
    navigate("/service");
  };
  const Sidebar = () => {
    navigate("/sidebarlast");
  };
  const handleToggle = () => {
    // setNavbarOpen((prev) => !prev);
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <div className="sidebaar">
        <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
        <button onClick={Submit}>Login</button>
        <button onClick={About}>About</button>
        <button onClick={Home}>Home</button>
        <button onClick={Service}>Service</button>
        <button onClick={Sidebar}>Sidebar</button>
      </div>
    </>
  );
}

export default Sidebar;
