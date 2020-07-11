import React from "react";
import "./App.css";
import MainCard from "./components/card/card";

function App() {
  return (
    <div>
      <label className="app-name"> Sentiment Analysis </label>
      <div className="container">
        <MainCard> </MainCard>
      </div>
    </div>
  );
}

export default App;
