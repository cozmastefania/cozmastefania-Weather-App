import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "&units=metric&appid=21cdf2fb10997f95ed4438541b1a3cdd";

const GeoLocation = () => {
  const [data, setData] = useState();
  const [lat, setLat] = useState(35.652832);
  const [lng, setLng] = useState(139.839478);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });

    axios.get(`${baseURL}?lat=${lat}&lon=${lng}${API_KEY}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  },[]);

  return data;
};

export default GeoLocation;
