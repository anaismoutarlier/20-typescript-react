import { FC, useEffect, useState } from "react";
import "./banner.css";

const Banner: FC = () => {
  const [weather, setWeather] = useState("cloudy");

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=48.887550&lon=2.303730&appid=4810d2c7945fe82541e351ffa914d368`
      );
      const { weather } = await data.json();
      setWeather(weather[0].description === "clear sky" ? "sunny" : "cloudy");
    };

    fetchWeather();
  }, []);
  return (
    <div
      className={`banner ${weather}`}
      style={{
        backgroundImage: `url(${
          weather === "sunny"
            ? "http://localhost:3000/images/sunny-sky.jfif"
            : "http://localhost:3000/images/cloudy-sky-banner-26906847.jpg"
        })`,
      }}
    >
      <div className="date-container">
        <h1 className="date-day">{new Date().getDate()}</h1>
        <div className="date-content-wrapper">
          <p className="date-content">
            {new Date().toLocaleString("fr-FR", { month: "long" })}
          </p>
          <p className="date-content">{new Date().getFullYear()}</p>
        </div>
      </div>
      <div>
        <p className="date-content date-weekday">
          {new Date().toLocaleString("fr-FR", { weekday: "long" })}
        </p>
      </div>
    </div>
  );
};

export default Banner;
