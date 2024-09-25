import React from "react";
import { WeatherListProps } from "../../lib/types";
import IconWeather from "../IconWeather/IconWeather";
import { dateWeather, tempCelsius } from "../../lib/function";
import { List, ListContainer, ListenP, ListSpan, TempList } from "./ListItemWeather";

const ListItem = ({ weather }: WeatherListProps) => {
  const { dt_txt, main, wind, weather: weatherArray } = weather;

  return (
    <ListContainer >
      <List>
        <ListenP>Дата: {dateWeather(dt_txt)}</ListenP>
        <TempList>
          Температура:
          <ListSpan>максимальная {tempCelsius(main.temp_max)}°C</ListSpan>
          <ListSpan>минимальная {tempCelsius(main.temp_min)}°C</ListSpan>
        </TempList>
        <ListenP>Влажность: {main.humidity} %</ListenP>
        <ListenP>Скорость ветра: {wind.speed} м/с</ListenP>
        <ListenP>Описание: {weatherArray?.[0].description} </ListenP>
      </List>
      <IconWeather iconCode={weatherArray?.[0].icon} />
    </ListContainer>
  );
};

export default ListItem;
