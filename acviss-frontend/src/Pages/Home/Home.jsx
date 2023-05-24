import "./home.css";
import Card from "../../Components/Card/Card";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [adsData, setAdsData] = useState();
  const [cardData, setCardData] = useState();
  const handleData = async () => {
    const data = await axios.get(
      "https://saurabh-acviss.onrender.com/companies/getAll"
    );
    setAdsData(data.data);
  };
  // console.log(adsData);

  const handleCardData = async (searchTerm) => {
    setCardData(searchTerm);
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <div className="homeContainer">
      <Navbar adsData={adsData} handleCardData={handleCardData} />
      <div className="cardContainer">
        {cardData ? (
          <Card item={cardData} />
        ) : (
          <div className="contentDiv">Search For The Content</div>
        )}
      </div>
    </div>
  );
};

export default Home;
