import "@styles/card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={props.flag} className="card-image" />
      </div>
      <div className="card-content">
        <span className="card-title">{props.name}</span>
        <p className="card-text">
          <span>Population:</span> {props.population.toLocaleString()}
        </p>
        <p className="card-text">
          <span>Region:</span> {props.region}
        </p>
        <p className="card-text">
          <span>Capital:</span> {props.capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
