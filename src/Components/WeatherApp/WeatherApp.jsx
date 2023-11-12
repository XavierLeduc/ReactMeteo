import React from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import drizzle_icon from '../Assets/drizzle.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WeatherApp = () => {

    let api_key = "779d654b6c9f6580a93d4bdec18a9de2";

    const search = async () => {
        const element = document.getElementsByClassName('cityInput');
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName('humidity-percentage');
        const wind = document.getElementsByClassName('wind-rate');
        const temperature = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + " km/h";
        temperature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
    }


    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Rechercher une ville'/>
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="search"/>
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">
                24°C
            </div>
            <div className="weather-location">
                Paris
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">50%</div>
                        <div className="text">Humidité</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Vent</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;