import { WeatherProps } from "./types";

export const tempCelsius = (degree: number) => {
  const dataDegree = (degree - 273.15).toFixed(2);
  return dataDegree;
};
export const dateWeather = (date: string) => {
  const newDate = new Date(date).toISOString().split("T")[0];
  return newDate;
};
export const filterFutureWeather = (data: WeatherProps[]) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysMap: { [key: string]: WeatherProps } = {};

  data.forEach((item) => {
    const itemDate = new Date(item.dt_txt);
    itemDate.setHours(0, 0, 0, 0);

    if (itemDate.getTime() >= today.getTime()) {
      const day = itemDate.toString().split("T")[0];
      if (!daysMap[day]) {
        daysMap[day] = item;
      }
    }
  });

  return Object.values(daysMap);
};
