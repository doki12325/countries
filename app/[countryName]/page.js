"use client";

import "@styles/detail.css";
import data from "@utils/data.json";
import { useStore } from "@utils/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { IoArrowBackOutline } from "react-icons/io5";

const Detail = ({ params }) => {
  const router = useRouter();
  const { theme } = useStore();
  const country = data.find(
    (country) =>
      country.alpha3Code.toLowerCase() === params.countryName.toLowerCase()
  );
  if (!country) return <div>Country not found</div>;
  return (
    <div className={`detail-container ${theme}`}>
      <div
        className="back-button"
        onClick={() => {
          router.back();
        }}
      >
        <IoArrowBackOutline />
        <span>Back</span>
      </div>

      <div className="detail-content-container">
        <div className="detail-image-container">
          <img src={country.flag} className="detail-image" />
        </div>
        <div className="detail-info-container">
          <h1>{country.name}</h1>
          <div className="detail-info">
            <div className="detail-info-left">
              <p>
                <span className="detail-heading">Native Name:</span>{" "}
                {country.nativeName}
              </p>
              <p>
                <span className="detail-heading">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="detail-heading">Region:</span> {country.region}
              </p>
              <p>
                <span className="detail-heading">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p>
                <span className="detail-heading">Capital:</span>{" "}
                {country.capital}
              </p>
            </div>
            <div className="detail-info-right">
              <p>
                <span className="detail-heading">Top Level Domain:</span>{" "}
                {country.topLevelDomain}
              </p>
              <p>
                <span className="detail-heading">Currencies:</span>{" "}
                {country.currencies.map((currency) => currency.name).join(", ")}
              </p>
              <p>
                <span className="detail-heading">Languages:</span>{" "}
                {country.languages
                  .slice(0, 2)
                  .map((language) => language.name)
                  .join(", ")}
              </p>
            </div>
          </div>
          {country.borders && (
            <div className="detail-border-countries">
              <span className="detail-heading">Border Countries:</span>
              <div className="border-countries">
                {country.borders.slice(0, 3).map((border) => {
                  const borderCountry = data.find(
                    (country) => country.alpha3Code === border
                  );
                  return (
                    <Link
                      href={`/${borderCountry.alpha3Code.toLowerCase()}`}
                      key={border}
                    >
                      <span className="border-country">{border}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
