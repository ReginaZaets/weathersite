import { WeatherListProps } from "../../lib/types";
import IconWeather from "../IconWeather/IconWeather";
import { dateWeather, tempCelsius } from "../../lib/function";
import { List, ListContainer, TempList } from "./ListItem";

const ListItem = ({ weather }: WeatherListProps) => {
  const { dt_txt, main, wind, weather: weatherArray } = weather;

  return (
    <ListContainer>
      <List>
        <p>Дата: {dateWeather(dt_txt)}</p>
        <TempList>
          Температура:
          <span>максимальная {tempCelsius(main.temp_max)}°C</span>
          <span>минимальная {tempCelsius(main.temp_min)}°C</span>
        </TempList>
        <p>Влажность: {main.humidity} %</p>
        <p>Скорость ветра: {wind.speed} м/с</p>
        <p>Описание: {weatherArray?.[0].description} </p>
      </List>
      <IconWeather iconCode={weatherArray?.[0].icon} />
    </ListContainer>
  );
};

export default ListItem;
