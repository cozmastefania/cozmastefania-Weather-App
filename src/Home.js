import GeoLocation from "./GeoLocation";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const loc = GeoLocation();
  console.log(loc);
  const name = loc.name;
  const temp = loc.main.temp;
  const humidity = loc.main.humidity;
  const sky = loc.weather[0].main;
  const wind = loc.wind.speed;
  const icon = loc.weather[0].icon;
  const URL = "https://openweathermap.org/img/wn/" + icon + ".png";

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
          <h2 className="city">Weather in {name} </h2>
          <h1 className="temp">{temp} °C</h1>
          <div className="flexbox">
            <img src={URL} alt="" className="icon" />
            <div className="description"> {sky} </div>
          </div>
          <div className="humidity">Humidity: {humidity} %</div>
          <div className="wind">Wind speed: {wind} km/h</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
