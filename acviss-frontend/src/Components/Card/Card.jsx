import "./card.css";

const Card = ({ item }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="cardHead">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt=""
          />
          <div className="cardHeading">
            <h2>{item.name}</h2>
            <a href={"https://" + item.url} target="_blank" rel="noopener">
              {item.url}
            </a>
          </div>
        </div>
        <div className="cardDetails">
          <h3>{item.ads.headline}</h3>
          <p>{item.ads.primaryText}</p>
          <p>{item.ads.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
