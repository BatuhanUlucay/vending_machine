import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { adjustHeaterCooler } from "../../redux/actions";
import { components } from "../../data/components";
import PropTypes from "prop-types";

const OPTIMUM_DRINK_TEMPERATURE = 4;

function Weather({ cityName }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // Initial weather data is 20 C
  const [weather, setWeather] = useState(20);

  const ref = useRef(null);

  useEffect(() => {
    ref.current = setInterval(getCurrentWeather, 5 * 60 * 1000);
    getCurrentWeather();

    return () => {
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (weather >= OPTIMUM_DRINK_TEMPERATURE) {
      dispatch(adjustHeaterCooler("cool"));
    } else {
      dispatch(adjustHeaterCooler("heat"));
    }
  }, [weather]);

  useEffect(() => {
    if (
      state.components[0].status === 0 &&
      state.components[1].status === 0 &&
      components[3].status === 0
    ) {
      if (weather >= OPTIMUM_DRINK_TEMPERATURE) {
        dispatch(adjustHeaterCooler("cool"));
      } else {
        dispatch(adjustHeaterCooler("heat"));
      }
    }
  }, [state.components[3].status]);

  const getCurrentWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=e284b3ad1dc44509adf164832232609&q=${cityName}&aqi=no`
      )
      .then((response) => {
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

Weather.propTypes = {
  component: PropTypes.string,
};
