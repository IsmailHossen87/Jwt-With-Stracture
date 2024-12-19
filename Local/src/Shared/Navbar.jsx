import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu, IoMdClose, IoMdMoon, IoMdSunny } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
// import "../Layout/App.css";
import { FaCaretDown } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider/AuthProvier";

function Navbar() {
  const { user, logOut, setUser } =
    useContext(AuthContext);

    const [darkMode, setDarkMode] = useState(false);
        const [toggle, setToggle] = useState(false);
    
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
      };


  const navbar = [
    { title: "Home", link: "/" },
    { title: "All Jobs", link: "/my-posted-jobs" },
    { title: "AddJob", link: "/addJob" },
    { title: "Email Jobs", link: "/emailJobs" },
  
  ];

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Log Out`,
          showConfirmButton: false,
          timer: 1500,
        });
        setUser(null);
        navigate("/login");
      })
      .catch((error) => console.error("Logout Error:", error.message));
  };

  return (
    <div
      className={`navbarMain py-4 lg:py-0 items-center px-4 text-yellow-200 ${
        darkMode ? "dark-mode" : "bg-gray-900 py-4"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="relative">
          <h2 className="text-2xl">
            <span className="text-3xl font-lobster">G</span>ear
            <span className="text-3xl font-lobster">S</span>print
          </h2>
        </div>

        <div className="lg:hidden absolute right-0">
          <button className="text-2xl pt-2" onClick={() => setToggle(!toggle)}>
            {toggle ? <IoMdClose /> : <IoMdMenu />}
          </button>

          <AnimatePresence>
            {toggle && (
              <>
                <motion.div
                  className="box"
                  key="box"
                  exit={{ opacity: 0, scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                />
{/* for responsive*/}
                <motion.div
                  className="bg-black pl-4  text-white fixed top-0 left-0 h-full z-20 shadow-lg"
                  style={{ width: "80%", maxWidth: "300px" }}
                  key="menu"
                  exit={{ opacity: 0, x: -300 }}
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {navbar.map((n, i) => (
                    <NavLink
                      to={n.link}
                      className="block py-2 hover:text-red-500"
                      key={i}
                      onClick={() => setToggle(false)}
                    >
                      {n.title}
                    </NavLink>
                  ))}
                  {user ? (
                    ""
                  ) : (
                    <>
                      <NavLink
                        to="/login"
                        onClick={() => setToggle(false)}
                        className="block py-2"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/register"
                        onClick={() => setToggle(false)}
                        className="block py-2"
                      >
                        Register
                      </NavLink>
                    </>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>



{/* large device */}
        <div className="hidden lg:block">
          <div className="flex gap-4 items-center">
            {navbar.map((n, i) => {
              return (
                <NavLink
                  to={n.link}
                  className="py-3 px-4 my-3 rounded-2xl"
                  key={i}
                >
                  {n.title}
                </NavLink>
              );
            })}
            {user ? (
              ""
            ) : (
              <>
                <NavLink to="/login" className={`p-2 rounded-lg`}>
                  Login
                </NavLink>
                <NavLink to="/register" className={`p-2 rounded-lg`}>
                  Register
                </NavLink>
                <button onClick={toggleDarkMode} className="text-2xl">
                  {darkMode ? <IoMdSunny /> : <IoMdMoon />}
                </button>
              </>
            )}
          </div>
        </div>

        {user ? (
          <div
            className="dropdown dropdown-end flex items-center -left-14 lg:-left-4 gap-2"
            tabIndex={0}
          >
            <img
              src={user?.photoURL}
              tabIndex={0}
              role="button"
              className="h-12 w-12 shadow-lg rounded-full cursor-pointer"
              alt="User Profile"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Click The Profile Icon"
            />
            <Tooltip id="my-tooltip" />
            <FaCaretDown className="text-gray-500 cursor-pointer" />
            <ul className="dropdown-content rounded-box z-[10] top-16 md:w-80 py-3 px-2 bg-black text-white shadow relative">
              <div
                className="absolute -top-3 right-10 h-0 w-0"
                style={{
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderBottom: "10px solid black",
                }}
              ></div>

              <li className="cursor-pointer hover:bg-green-400 p-2 rounded-md">
                Name: {user?.displayName}
              </li>
              <li className="cursor-pointer hover:bg-green-400 p-2 rounded-md">
                Email: {user?.email}
              </li>
              <li className="flex justify-center">
                <button
                  onClick={handleLogOut}
                  className="btn btn-error text-white text-center mt-4 mx-auto py-2"
                >
                  Logout
                </button>
              </li>
              <li className=" flex items-center my-2 justify-center">
                Mood: &nbsp;
                <button onClick={toggleDarkMode} className="text-2xl">
                  {darkMode ? <IoMdSunny /> : <IoMdMoon />}
                </button>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Navbar;
