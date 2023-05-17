import "./current.css"

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`}></img>
            </div>

            <div className="bottom">
                <p className="temperature">{Math.round((data.main.temp)*10)/10}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like </span>
                        <span className="parameter-value">{Math.round((data.main.feels_like)*10)/10}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-value">{Math.round((data.main.humidity)*10)/10}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind </span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Range </span>
                        <span className="parameter-value">{Math.round((data.main.temp_min)*10)/10} - {Math.round((data.main.temp_max)*10)/10}°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CurrentWeather;