import React from "react";
import {
  MainContainer,
  MainH1,
  MainH2,
  MainItem,
  MainItemBox,
  MainItemWeather,
  MainText,
} from "./MainStyle";
import { useInputUser } from "../../context/hooks/inputUser";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { WeatherProps } from "../../lib/types";
import { filterFutureWeather } from "../../lib/function";
import ListItem from "../ListItem/ListItem";
import { getCurrentWeather } from "../../api/getweather";

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
      {!isLoading && !isError && currentCity && currentWeather.length > 0 && (
        <>
          <MainItem>
            <MainH1 data-testid="city">Текущая погода в городе {currentCity?.name}</MainH1>
            <ListItem weather={currentWeather[0]} />
          </MainItem>

          <MainItemWeather>
            <MainH2>Прогноз на 5 дней</MainH2>
            <MainItemBox>
              {futureWeather.slice(0, 6).map((item) => (
                <div key={item.dt}>
                  <ListItem weather={item} />
                </div>
              ))}
            </MainItemBox>
          </MainItemWeather>
        </>
      )}
    </MainContainer>
  );
};

export default Main;
