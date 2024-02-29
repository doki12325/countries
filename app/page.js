"use client";

import "@styles/home.css";

import Card from "@components/card.jsx";

import { useStore } from "@utils/store";
import data from "@utils/data.json";

import { IoMdSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

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
            {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((data) => (
              <span
                key={data}
                onClick={() => {
                  setRegion(data);
                  setMenu(false);
                }}
              >
                {data}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={"home-cards-wrapper"}>
        {data
          .filter((data) => {
            const nameMatch = search
              ? data.name.toLowerCase().includes(search.toLowerCase())
              : true;
            const regionMatch = region ? data.region === region : true;
            return nameMatch && regionMatch;
          })
          .map((data, index) => (
            <Link
              href={`/${data.alpha3Code}`}
              key={index}
            >
              <Card {...data} key={index} />
            </Link>
          ))}
      </div>
    </div>
  );
}
