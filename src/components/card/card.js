import React, { useState } from "react";
import "./card.scss";
import axios from "axios";
import anime from "animejs/lib/anime.es.js";

const MainCard = () => {
  const [value, setValue] = useState("");
  const [sentiment, setSentiment] = useState(0);
  const roundLogEl = document.querySelector(".sentiment-score");

  const handleClick = () => {
    axios
      .post("http://192.168.0.114:8000/sentiment", { text: value })
      .then(response => {
        setSentiment(() => response.data.sentiment);
        anime({
          targets: roundLogEl,
          innerHTML: [sentiment, response.data.sentiment],
          easing: "easeInCubic",
          round: 1
        });
      });
  };

  return (
    <div className="main-card">
      <div className="input-col">
        <div className="about-text">
          <label>
            Sentiment analysis (also known as opinion mining or emotion AI)
            refers to the use of natural language processing, text analysis,
            computational linguistics, and biometrics to systematically
            identify, extract, quantify, and study affective states and
            subjective information. Sentiment analysis is widely applied to
            voice of the customer materials such as reviews and survey
            responses, online and social media, and healthcare materials for
            applications that range from marketing to customer service to
            clinical medicine.
          </label>
        </div>
        <div className="input-text">
          <textarea
            placeholder="-- Enter any statement --"
            name="sentiment-text"
            rows="10"
            cols="100"
            value={value}
            onChange={v => setValue(v.target.value)}
          ></textarea>
          <div className="h-4x"></div>
          <div className="submit-btn pointer" onClick={handleClick}>
            <img src="/assets/go-btn.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="score-card">
        <label className="sentiment-score">{sentiment}</label>
      </div>
    </div>
  );
};

export default MainCard;
