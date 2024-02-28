"use client";
import "@styles/navbar.css";
import { useStore } from "@utils/store";

import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useStore();
  return (
    <div className={`nav-container ${theme}`}>
      <h2>Where in the world?</h2>
      <div
        className="nav-theme-button"
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        {theme === "dark" && <MdDarkMode size={"1.2rem"} />}
        {theme === "light" && <MdOutlineLightMode size={"1.2rem"} />}
        <span>{theme[0].toUpperCase() + theme.slice(1)} Mode</span>
      </div>
    </div>
  );
};

export default Navbar;
