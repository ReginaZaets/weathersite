import { MainContainer, MainText, WeatherImg } from "./MainStyle";
import { useInputUser } from "../../context/hooks/inputUser";
import { useEffect, useState } from "react";
import { getCurrentWeather } from "../../api/getweather";
import Loader from "../Loader/Loader";
import { WeatherProps } from "../../lib/types";
import {
  dateWeather,
  filterFutureWeather,
  tempCelsius,
} from "../../lib/function";

const Main = () => {
  const { inputUser } = useInputUser();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<WeatherProps | null>(null);
  const [currentWeather, setCurrentWeather] = useState<WeatherProps[]>([]);

  useEffect(() => {
    if (inputUser) {
      setIsLoading(true);
      setIsError(null);
      getCurrentWeather(inputUser)
        .then((response) => {
          setIsLoading(false);
          setCurrentCity(response.city);
          setCurrentWeather(response.list);
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

  const futureWeather = filterFutureWeather(currentWeather);

  return (
    <MainContainer>
      <MainText>
        {inputUser ? "Результат поиска " : "Введите город, чтобы узнать погоду"}
      </MainText>
      {isLoading && <Loader />}
      {!isLoading && isError && <p>{isError}</p>}
      {!isLoading && currentCity && currentWeather && (
        <>
          {/* Текущая погода */}
          {currentWeather.length > 0 && (
            <div>
              <h1>Текущая погода в {currentCity?.name}</h1>
              <p>
                Дата:
                {dateWeather(currentWeather[0].dt_txt)}
              </p>
              <p>Температура: {tempCelsius(currentWeather[0].main.temp)}°C</p>
              <p>Влажность: {currentWeather[0].main.humidity} %</p>
              <p>Скорость ветра: {currentWeather[0].wind.speed} км/ч</p>
              <WeatherImg
                src={currentWeather[0].weather?.icon}
                alt="Иконка погоды"
              />
            </div>
          )}

          {/* Прогноз на 5 дней */}
          <div>
            <h2>Прогноз на 5 дней</h2>
            <table>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Температура</th>
                  <th>Влажность</th>
                  <th>Скорость ветра</th>
                  <th>Погода</th>
                </tr>
              </thead>
              <tbody>
                {futureWeather.slice(1, 6).map((item, index) => (
                  <tr key={index}>
                    <td>{dateWeather(item.dt_txt)}</td>
                    <td>{tempCelsius(item.main.temp)}°C</td>
                    <td>{item.main.humidity} %</td>
                    <td>{item.wind.speed} км/ч</td>
                    <td>
                      <WeatherImg
                        src={item.weather?.icon}
                        alt="Иконка погоды"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </MainContainer>
  );
};

export default Main;
