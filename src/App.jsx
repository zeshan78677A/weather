import { useEffect, useState } from "react";
import ForeCast from "./components/ForeCast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./Services/WeatherService";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [query, setQuery] = useState({ q: 'london' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const message = query.q ? query.q : 'current Location'
    toast.success(`Fetched Weather Data for ${message.toUpperCase()}`)
    const data = await getFormattedWeatherData({ ...query, units });
    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackGround = () => {
    if (!weather) return "from-cyan-600 to-blue-700"; // Default background

    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-500 to-blue-700';

    return 'from-yellow-500 to-orange-600';
  };

  const backgroundClass = formatBackGround();

  return (
    <div className={`mx-auto max-w-screen-xl mt-4 py-5 px-40 bg-gradient-to-br shadow-xl shadow-gray-400 ${backgroundClass}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <ForeCast title="3 hour step forecast" data={weather.hourly} />
          <ForeCast title="daily forecast" data={weather.daily} />
        </>
      )}
      <ToastContainer autoClose={2500} theme="dark"/>
    </div>
  );
};

export default App;
