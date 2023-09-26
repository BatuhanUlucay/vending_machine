import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather({ cityName }) {
  // Initial weather data is 20 C
  const [weather, setWeather] = useState(20);

  useEffect(() => {
    getCurrentWeather();
  }, []);

  const getCurrentWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=e284b3ad1dc44509adf164832232609&q=${cityName}&aqi=no`
      )
      .then((response) => {
        console.log(response.data.current.temp_c);
        setWeather(response.data.current.temp_c);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      Current Weather in {cityName} is {weather} C.
    </div>
  );
}

export default Weather;
