import React, { useEffect, useState } from "react";
import Sun from "./Sun.svg?react";
import Moon from "./Moon.svg?react";
//import "./Darkmode.css";
import "../../style.css"

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

//   useEffect(() => {
//     const element = document.documentElement;

//     if (theme === "dark") {
//       element.classList.add("dark");
//     } else {
//       element.classList.remove("dark");
//     }

//     localStorage.setItem("theme", theme);
//   }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark_mode flex items-center justify-center">
      <button
        aria-label="theme toggler"
        onClick={toggleTheme}
        className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-200 dark:bg-gray-800 h-10 w-10 dark:text-white transition-all duration-300"
      >
        {theme === "dark" ? (
          <Moon className="w-6 h-6" />
        ) : (
          <Sun className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default Darkmode;
