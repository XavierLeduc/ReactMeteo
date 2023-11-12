import React from 'react';
import './WeatherApp.css';

import search_icon from '../../Assets/search.png';
import clear_icon from '../../Assets/clear.png';
import cloud_icon from '../../Assets/cloud.png';
import rain_icon from '../../Assets/rain.png';
import snow_icon from '../../Assets/snow.png';
import drizzle_icon from '../../Assets/drizzle.png';
import wind_icon from '../../Assets/wind.png';
import humidity_icon from '../../Assets/humidity.png';

const WeatherApp = () => {
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" />
            </div>
        </div>
    );
};

export default WeatherApp;