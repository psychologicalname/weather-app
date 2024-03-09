'use client'

import Hero from "@/components/Hero";
import Forecast from "@/components/Forecast";
import Info from "@/components/Info";
import Temperature from "@/components/Temperature";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";

import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false)
  const debouncedSearchTerm = useDebounce(searchText, 300);

  const [forecast, setForecast] = useState({});
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true)
      let coords = {}

      try {
        if (navigator.geolocation) {
          coords = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        }
      }
      catch {

      }

      let currentLocationUrl = ``;

      if (coords?.coords?.latitude) {
        currentLocationUrl += `https://api.openweathermap.org/data/2.5/weather?&lat=${coords.coords.latitude}&lon=${coords.coords.longitude}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API}`;
        try {
          const data = await fetch(currentLocationUrl)
            .then((res) => res.json())
            .then((data) => data);
          setCurrentLocation(data.name)
        } catch (error) {
          setCurrentLocation('CURRENT LOCATION');
          console.log(error);
        }
      }
      else {
        setCurrentLocation('CURRENT LOCATION');
      }


      let baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API}`;

      let forecastUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tokyo?key=${process.env.NEXT_PUBLIC_VISUAL_CROSSING_API}`;


      if (debouncedSearchTerm) {
        baseUrl += '&q=' + debouncedSearchTerm
        forecastUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${debouncedSearchTerm}?key=${process.env.NEXT_PUBLIC_VISUAL_CROSSING_API}`
      }
      else if (coords?.coords?.latitude) {
        baseUrl += `&lat=${coords.coords.latitude}&lon=${coords.coords.longitude}`
        forecastUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${coords.coords.latitude},${coords.coords.longitude}?key=${process.env.NEXT_PUBLIC_VISUAL_CROSSING_API}`
      }
      else {
        baseUrl += '&q=tokyo'
      }

      try {
        const data = await fetch(baseUrl)
          .then((res) => res.json())
          .then((data) => data);
        setWeatherData(data)


        const forecastResp = await fetch(forecastUrl)
          .then((res) => res.json())
          .then((data) => data);
        setForecast(forecastResp)

        setLoading(false)

      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    getWeatherData()
  }, [debouncedSearchTerm])

  return (
    <>
      <Navbar currentLocation={currentLocation} weatherData={weatherData} searchText={searchText} setSearchText={setSearchText} />
      <main className="flex min-h-screen flex-col items-center justify-between sm:px-24 px-6">
        <div className="z-10 max-w-5xl w-full items-center justify-between">
          {weatherData.weather && !loading ?
            <>
              <Hero weatherData={weatherData} />
              <Forecast forecast={forecast} />
              <Info weatherData={weatherData} />
              {/* <Temperature /> */}
            </>
            :
            (loading ?
              <Loader />
              : <div className="flex min-h-80 flex-col items-center justify-between sm:px-24 px-6 translate-y-[50%]">
                <p className="text-2xl font-bold text-center">No data found!<br className="block sm:hidden" /> Try another city</p>
              </div>
            )
          }
        </div>
      </main>
    </>
  );
}
