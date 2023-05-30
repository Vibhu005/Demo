import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { BiLogIn, BiSearch } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaBars, FaUser } from "react-icons/fa";
import { HiDatabase } from "react-icons/hi";
import { NavLink } from "react-router-dom";
// import MyForm from "./MyForm";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: <AiFillHome />,
  },
  {
    path: "/login",
    name: "Login",
    icon: <BiLogIn />,
  },
  {
    path: "/service",
    name: "Service",
    icon: <MdHomeRepairService />,
  },
  {
    path: "/signup",
    name: "SignUp",
    icon: <SiGnuprivacyguard />,
  },
  {
    path: "/about",
    name: "About",
    icon: <FaUser />,
  },
  {
    path: "/example",
    name: "About",
    icon: <HiDatabase />,
  },
  {
    path: "/myform",
    name: "Myform",
    icon: <HiDatabase />,
  },
];

const SidebarLast = ({ Children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 10px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };
  return (
    <>
      <div className="main_container">
        <motion.div
          animate={{ width: isOpen ? "200px" : "42.5px" }}
          className="sidebarlast"
        >
          <div className="top_section">
            {isOpen && <h1 className="logo">DoSomeCoding</h1>}
            <div className="baars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="serach_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  placeholder="Search..."
                ></motion.input>
              )}
            </AnimatePresence>
          </div>

          <section className="routes">
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name} className="link">
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <main>{Children}</main>
      </div>
    </>
  );
};

export default SidebarLast;
