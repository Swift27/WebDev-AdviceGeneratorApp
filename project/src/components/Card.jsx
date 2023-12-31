import React, { useEffect, useState } from "react";
import "./card.css";
import divider from "../assets/images/pattern-divider-desktop.svg";
import dice from "../assets/images/icon-dice.svg";
import Axios from "axios";

const Card = () => {
  const url = "https://api.adviceslip.com/advice?t=";
  const [advice, setAdvice] = useState({});

  const fetchAdvice = () => {
    Axios.get(url + Math.floor(Math.random() * 200) + 1)
      .then((res) => setAdvice(res.data.slip))
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <p>ADVICE #{advice.id}</p>
        <h4>"{advice.advice}"</h4>
        <div className="card-divider">
          <img src={divider} />
        </div>
      </div>
      <div
        className="card-dice"
        onClick={() => {
          fetchAdvice();
        }}
      >
        <img src={dice} />
      </div>
    </div>
  );
};

export default Card;
