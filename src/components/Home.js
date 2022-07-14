import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "&units=metric&appid=21cdf2fb10997f95ed4438541b1a3cdd";

const Home = () => {
  const [data, setData] = useState();
  const [lat, setLat] = useState("35.652832");
  const [lng, setLng] = useState("139.839478");
  const [weather, setWeather] = useState([
    {
      name: "",
      temp: "",
      humidity: "",
      sky: "",
      wind: "",
      icon: "",
      ul: "",
    },
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });

    axios.get(`${baseURL}?lat=${lat}&lon=${lng}${API_KEY}`).then((response) => {
      setData(response.data);
      setWeather([
        {
          name: response.data.name,
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          sky: response.data.weather[0].main,
          wind: response.data.wind.speed,
          icon: response.data.weather[0].icon,
          url: "https://openweathermap.org/img/wn/" + response.data.weather[0].icon + ".png",
        },
      ]);
      console.log(response.data);
    });

   
  }, [lat, lng]);

  console.log(weather);

  const navigate = useNavigate();
  const backHandle = () => {
    navigate("/");
  };

  return (
    <div>
      <button className="button" onClick={backHandle}>
        Back
      </button>
      <div className="card">
        <div>
          <h2 className="city">Weather in {weather.name} </h2>
          <h1 className="temp">{weather.temp} °C</h1>
          <div className="flexbox">
            <img src={weather.url} alt="" className="icon" />
            <div className="description"> {weather.sky} </div>
          </div>
          <div className="humidity">Humidity: {weather.humidity} %</div>
          <div className="wind">Wind speed:{weather.wind} km/h</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
