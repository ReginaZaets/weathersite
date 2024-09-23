import { MainContainer, MainText, WeatherImg } from "./MainStyle";
import { useInputUser } from "../../context/hooks/inputUser";
import { useEffect, useState } from "react";
import { getWeather } from "../../api/getweather";
import Loader from "../Loader/Loader";
import { WeatherProps } from "../../lib/types";

const Main = () => {
  const { inputUser } = useInputUser();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<WeatherProps | null>(null);
  const [currentWeather, setCurrentWeather] = useState<WeatherProps | null>(
    null
  );
  useEffect(() => {
    if (inputUser) {
      setIsLoading(true);
      setIsError(null);
      getWeather(inputUser)
        .then((response) => {
          setIsLoading(false);
          setCurrentCity(response.location);
          setCurrentWeather(response.current);
        })
        .catch((error) => {
          setIsError(`Произошла ошибка при загрузке данных: ${error.message}`);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      setIsError(null);
    }
  }, [inputUser]);

  // const handleOpenItem = (user: User) => {
  //   setCurrentUser(user === currentUser ? null : user);
  // };

  return (
    <MainContainer>
      <MainText>
        {inputUser ? "Результат поиска " : "Введите город, чтобы узнать погоду"}
      </MainText>
      {isLoading && <Loader />}
      {!isLoading && isError && <p>{isError}</p>}
      {/* {!isLoading && currentWeather?.length > 0 && (
        <>
          <p>{}</p>
        </>
      )} */}
      {!isLoading && currentWeather && (
        <div>
          <h1>Погода в {currentCity?.name}</h1>
          <p>Температура: {currentWeather.temperature}°C</p>
          <p>Влажность: {currentWeather.humidity} %</p>
          <p>Скорость ветра: {currentWeather.wind_speed} км/ч</p>
          <WeatherImg src={currentWeather.weather_icons} alt="Иконка погоды" />
        </div>
      )}
    </MainContainer>
  );
};

export default Main;
