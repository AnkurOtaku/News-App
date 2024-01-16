import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../store/store";
import d01 from "./weather/01d.gif";
import d02 from "./weather/02d.gif";
import d03 from "./weather/03d.gif";
import d04 from "./weather/04d.gif";
import d09 from "./weather/09d.gif";
import d10 from "./weather/10d.gif";
import d11 from "./weather/11d.gif";
import d13 from "./weather/13d.gif";
import d50 from "./weather/50d.gif";
import n01 from "./weather/01n.gif";
import n02 from "./weather/02n.gif";
import n03 from "./weather/03n.gif";
import n04 from "./weather/04n.gif";
import n09 from "./weather/09n.gif";
import n10 from "./weather/10n.gif";
import n11 from "./weather/11n.gif";
import n13 from "./weather/13n.gif";
import n50 from "./weather/50n.gif";

let lat = 0,
  lon = 0;
const urlArray = [
  { key: "01d", url: d01 },
  { key: "02d", url: d02 },
  { key: "03d", url: d03 },
  { key: "04d", url: d04 },
  { key: "09d", url: d09 },
  { key: "10d", url: d10 },
  { key: "11d", url: d11 },
  { key: "13d", url: d13 },
  { key: "50d", url: d50 },
  { key: "01n", url: n01 },
  { key: "02n", url: n02 },
  { key: "03n", url: n03 },
  { key: "04n", url: n04 },
  { key: "09n", url: n09 },
  { key: "10n", url: n10 },
  { key: "11n", url: n11 },
  { key: "13n", url: n13 },
  { key: "50n", url: n50 },
];

// get real location data
const getLiveLocation = async () => {
  try {
    const currentLocation = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    });
    lat = currentLocation.lat;
    lon = currentLocation.lon;
  } catch (error) {
    console.error("Error fetching current weather data:", error.message);
  }
};

// data of desired country
const getCountryLocation = async (country) => {
  try {
    const response = await axios.get(
      `https://api.apilayer.com/world_news/geo-coordinates?location=${country.capital}`,
      {
        headers: {
          apikey: process.env.REACT_APP_NEWS_API_KEY,
        },
      }
    );
    const result = response.data;
    lat = result.latitude;
    lon = result.longitude;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
};

// fetching weather data
const fetchData = async (
  country,
  apiKey,
  setWeatherData,
  fetchIcon,
  setIcon,
  setWeatherBackgroundUrl
) => {
  try {
    await Promise.all([
      country ? getCountryLocation(country) : getLiveLocation(),
    ]);
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?",
      {
        params: {
          appid: apiKey,
          lat: lat,
          lon: lon,
          units: "metric",
        },
      }
    );

    const apiResponse = response.data;
    setWeatherData(apiResponse);
    fetchIcon(apiResponse, setIcon, setWeatherBackgroundUrl);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
};

// fetch weather icon
const fetchIcon = async (apiResponse, setIcon, setWeatherBackgroundUrl) => {
  try {
    const response = await fetch(
      `https://openweathermap.org/img/wn/${apiResponse.weather[0].icon}@2x.png`
    );

    const blob = await response.blob();

    // Create object URL for the blob
    const objectUrl = URL.createObjectURL(blob);

    // Set the object URL as the image source
    setIcon(objectUrl);

    const matchingIcon = urlArray.find(
      (icons) => apiResponse.weather[0].icon === icons.key
    );
    console.log('matched icon : '+ matchingIcon);

    setWeatherBackgroundUrl(matchingIcon.url);
  } catch (error) {
    console.error("Error fetching image:", error.message);
  }
};

function Weather() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [weatherData, setWeatherData] = useState(null);
  const { country } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState(null);
  const [weatherBackgroundUrl, setWeatherBackgroundUrl] = useState("");

  useEffect(() => {
    const effectCallback = async () => {
      if (country) {
        try {
          await getCountryLocation(country);
        } catch (error) {
          console.error("Error fetching country location:", error.message);
        }
      } else {
        try {
          await getLiveLocation();
        } catch (error) {
          console.error("Error fetching live location:", error.message);
        }
      }

      // Fetch weather data and icon
      fetchData(
        country,
        apiKey,
        setWeatherData,
        fetchIcon,
        setIcon,
        setWeatherBackgroundUrl
      );
    };

    // Call the effect callback
    effectCallback();
  }, [country, apiKey]);

  if (!weatherData) {
    return null;
  }

  return (
    <div
      className={`w-full bg-cover bg-center text-black `}
      style={{ backgroundImage: `url(${weatherBackgroundUrl})` }}
    >
      <div className="mx-auto max-w-5xl flex justify-evenly p-1 md:p-2 *:rounded-xl *:bg-[#dadadaab]">
        <div className="px-1 flex place-content-center items-center">
          {icon && <img src={icon} alt="weather icon" className="w-[40px]" />}
          <div className="mx-2 capitalize">{weatherData.main.temp}°C</div>
        </div>
        <div className="px-1 flex place-content-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M24.0754 29.1419C20.8529 29.1419 18.2226 26.4351 18.2226 23.1188V22.4102C18.2226 21.8291 18.6909 21.3472 19.2555 21.3472C19.8201 21.3472 20.2883 21.8291 20.2883 22.4102V23.1188C20.2883 25.2729 21.9822 27.0161 24.0754 27.0161C26.1686 27.0161 27.8624 25.2729 27.8624 23.1188C27.8624 20.9646 26.1686 19.2214 24.0754 19.2214H1.35302C0.788408 19.2214 0.32019 18.7396 0.32019 18.1585C0.32019 17.5774 0.788408 17.0956 1.35302 17.0956H24.0754C27.2978 17.0956 29.9281 19.8025 29.9281 23.1188C29.9281 26.4351 27.2978 29.1419 24.0754 29.1419Z"
              fill="#292D32"
            />
            <path
              d="M24.0754 14.9697H1.35302C0.788408 14.9697 0.32019 14.4878 0.32019 13.9068C0.32019 13.3257 0.788408 12.8439 1.35302 12.8439H24.0754C26.1686 12.8439 27.8624 11.1007 27.8624 8.94652C27.8624 6.79235 26.1686 5.04917 24.0754 5.04917C21.9822 5.04917 20.2883 6.79235 20.2883 8.94652V9.65513C20.2883 10.2362 19.8201 10.718 19.2555 10.718C18.6909 10.718 18.2226 10.2362 18.2226 9.65513V8.94652C18.2226 5.63023 20.8529 2.92334 24.0754 2.92334C27.2978 2.92334 29.9281 5.63023 29.9281 8.94652C29.9281 12.2628 27.2978 14.9697 24.0754 14.9697Z"
              fill="#292D32"
            />
            <path
              d="M11.4197 10.7196H1.35302C0.788408 10.7196 0.32019 10.2378 0.32019 9.65673C0.32019 9.07567 0.788408 8.59382 1.35302 8.59382H11.4197C12.8932 8.59382 14.0913 7.36084 14.0913 5.84441C14.0913 4.32799 12.8932 3.09501 11.4197 3.09501C9.9462 3.09501 8.74811 4.32799 8.74811 5.84441V6.38295C8.74811 6.96401 8.2799 7.44587 7.71528 7.44587C7.15066 7.44587 6.68245 6.97819 6.68245 6.38295V5.84441C6.68245 3.15169 8.8032 0.969177 11.4197 0.969177C14.0362 0.969177 16.157 3.15169 16.157 5.84441C16.157 8.53713 14.0362 10.7196 11.4197 10.7196Z"
              fill="#292D32"
            />
          </svg>
          <div className="mx-2">{weatherData.wind.speed}m/sec</div>
        </div>
        <div className="px-1 flex place-content-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="30"
            viewBox="0 0 25 30"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0223 17.6473C15.7137 17.638 15.4067 17.686 15.126 17.7875C14.8452 17.889 14.5986 18.0412 14.406 18.2317C14.0071 18.6213 13.8065 19.1147 13.8065 19.7118C13.8065 20.3126 14.0048 20.8078 14.4013 21.1938C14.7979 21.5816 15.3375 21.7745 16.02 21.7745C16.7094 21.7745 17.2489 21.5816 17.6432 21.1974C18.0375 20.8133 18.2335 20.3163 18.2335 19.7118C18.2335 19.0983 18.0375 18.6013 17.6455 18.2208C17.2582 17.8367 16.7163 17.6473 16.0223 17.6473ZM16.0223 21.0245C15.2983 21.0245 14.934 20.5857 14.934 19.7082C14.934 18.8307 15.296 18.3919 16.0223 18.3919C16.7463 18.3919 17.1106 18.8307 17.1106 19.7082C17.1083 20.5875 16.7463 21.0245 16.0223 21.0245ZM11.254 15.4718C11.6483 15.0876 11.8443 14.5906 11.8443 13.9862C11.8443 13.3726 11.6483 12.8756 11.2586 12.4951C10.8666 12.1146 10.3248 11.9235 9.63074 11.9235C8.95285 11.9235 8.41331 12.1183 8.01441 12.5079C7.61552 12.8975 7.41492 13.3909 7.41492 13.988C7.41492 14.5888 7.61321 15.084 8.0098 15.4699C8.40639 15.8577 8.94594 16.0507 9.62844 16.0507C10.3179 16.0507 10.8597 15.8577 11.254 15.4718ZM8.54243 13.9862C8.54243 13.1087 8.90443 12.6699 9.63074 12.6699C10.3571 12.6699 10.7191 13.1087 10.7191 13.9862C10.7191 14.8637 10.3571 15.3024 9.63074 15.3024C8.90443 15.3024 8.54243 14.8637 8.54243 13.9862ZM16.5803 11.9999C16.4289 11.9274 16.2472 11.9053 16.0752 11.9384C15.9031 11.9715 15.7548 12.0572 15.6626 12.1765L8.84909 20.9717C8.78791 21.0516 8.75468 21.1429 8.75278 21.2363C8.75088 21.3297 8.78039 21.4218 8.83829 21.5032C8.89618 21.5846 8.9804 21.6525 9.08235 21.6998C9.1843 21.7472 9.30034 21.7723 9.41861 21.7727C9.53321 21.7733 9.646 21.7502 9.74587 21.7058C9.84574 21.6614 9.92923 21.5973 9.98813 21.5197L16.8016 12.7245C16.8475 12.6655 16.8782 12.5999 16.8919 12.5315C16.9056 12.4631 16.902 12.3933 16.8815 12.3259C16.8609 12.2586 16.8237 12.1952 16.772 12.1392C16.7203 12.0833 16.6552 12.036 16.5803 11.9999Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8265 0.969177C12.8265 0.969177 0.8573 14.6452 0.8573 19.8684C0.8573 25.0916 6.21125 29.3172 12.8265 29.3172C19.4417 29.3172 24.7956 25.0916 24.7956 19.8684C24.7956 14.6452 12.8265 0.969177 12.8265 0.969177ZM19.6376 22.4864C18.7246 22.501 18.2012 22.6321 16.2597 23.1254L15.983 23.1946C14.6549 23.6133 13.5505 23.8409 12.8795 23.8409C11.7497 23.8409 9.88662 23.2256 9.86817 23.2183L9.49003 23.12C7.45405 22.6047 6.96984 22.4828 6.15591 22.4755C5.41346 22.4755 4.66871 22.572 3.88475 22.7668C3.36531 21.8348 3.09452 20.8284 3.08927 19.8102C3.08927 16.9319 8.24493 9.6296 12.8218 4.04411C17.3988 9.63142 22.5567 16.9355 22.5567 19.8102C22.5567 20.8024 22.2916 21.7928 21.7682 22.7559C21.0782 22.5853 20.3606 22.4946 19.6376 22.4864Z"
              fill="black"
            />
          </svg>
          <div className="mx-2">{weatherData.main.humidity}</div>
        </div>
        <button
          className="py-3 px-6 my-auto h-full rounded-md active:bg-grey"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M2 2.00012L8.30415 14.1656L14.6083 2.00012"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {toggle && (
        <div className="mx-auto max-w-5xl flex justify-evenly gap-2 p-1 md:p-2 *:md:px-2 *:rounded-xl *:bg-[#dadadaab]">
          <div className="text-center">
            <svg
              version="1.0"
              id="Layer_1"
              width="20px"
              height="20px"
              viewBox="0 0 70 70"
              className="inline-block"
            >
              <path
                fill="#231F20"
                d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64
		s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14
		s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"
              />
              <path
                fill="#231F20"
                d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34
		c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z"
              />
            </svg>
            {country ? ` ${country.capital}` : ` (${lat} ${lon})`}
          </div>
          <div className="text-center">
            Feels Like : <b>{weatherData.main.feels_like}°C</b>
          </div>
          <div className="text-center">
            {" "}
            Min/Max Temp: <b>{weatherData.main.temp_min}°C</b>/
            <b>{weatherData.main.temp_max}°C</b>
          </div>
          <div className="text-center">
            Visibility: <b>{weatherData.visibility / 1000}km</b>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
