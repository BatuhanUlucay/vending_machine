/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { adjustHeaterCooler } from "../../redux/actions";
import { shouldTriggerHeaterOrCooler } from "../../util/machineUtils";
import PropTypes from "prop-types";

const OPTIMUM_DRINK_TEMPERATURE = 4;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WEATHER_API_URL = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}`;
const FIVE_MINS_IN_MS = 5 * 60 * 1000;

function Weather({ cityName }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // Initial weather data is 20 C
  const [weather, setWeather] = useState(20);

  // Update weather every 5 minutes.
  useEffect(() => {
    const getCurrentWeather = () => {
      axios.get(`${WEATHER_API_URL}&q=${cityName}&aqi=no`).then((response) => {
        setWeather(response.data.current.temp_c);
      });
    };
    getCurrentWeather();
    const interval = setInterval(() => {
      getCurrentWeather();
    }, FIVE_MINS_IN_MS);
    return () => clearInterval(interval);
  }, []);

  // Decide whether cooler or heater will be running according to current temperature.
  useEffect(() => {
    if (weather >= OPTIMUM_DRINK_TEMPERATURE) {
      dispatch(adjustHeaterCooler("cool"));
    } else {
      dispatch(adjustHeaterCooler("heat"));
    }
  }, [weather]);

  // Disable cooling and heating when robot arm is on. This is for not to exceed 5 unit/hour energy consumption.
  useEffect(() => {
    if (shouldTriggerHeaterOrCooler(state.components)) {
      if (weather >= OPTIMUM_DRINK_TEMPERATURE) {
        dispatch(adjustHeaterCooler("cool"));
      } else {
        dispatch(adjustHeaterCooler("heat"));
      }
    }
  }, [state.components[3].status]);

  return (
    <div>
      Current Weather in {cityName} is {weather} C.
    </div>
  );
}

export default Weather;

Weather.propTypes = {
  component: PropTypes.string,
};
