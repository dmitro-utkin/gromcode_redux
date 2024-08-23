import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from './weather.actions';

const Weather = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weather.cities);

  useEffect(() => {
    dispatch(getWeatherData());
  }, [dispatch]);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cities.map((city) => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Weather;