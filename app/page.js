"use client";

import "@styles/home.css";
import { useStore } from "@utils/store";

import { IoMdSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

export default function Home() {
  const { theme } = useStore();
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [menu, setMenu] = useState(false);
  return (
    <div className={`main-container ${theme}`}>
      <div className={"home-filter-wrapper"}>
        <div className={"home-filter-input-wrapper"}>
          <IoMdSearch
            size={"1.2rem"}
            color={theme === "dark" ? "white" : "black"}
          />
          <input
            type="text"
            placeholder="Search for a country..."
            className={"home-filter-input"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="home-select-wrapper">
          <div
            className={"home-select"}
            onClick={() => setMenu((prev) => !prev)}
          >
            <span>{region === "" ? "Filter by Region" : region}</span>
            <FaAngleDown />
          </div>
          <div
            className="home-select-options-wrapper"
            style={{ display: menu ? "flex" : "none" }}
          >
            {["Africa", "America", "Asia", "Europe", "Oceania"].map((data) => (
              <span key={data} onClick={() => setRegion(data)}>
                {data}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
