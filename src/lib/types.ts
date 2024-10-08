export type WeatherProps = {
  name: string;
  wind: WeatherWind;
  weather: Weather[];
  dt_txt: string;
  main: WeatherMain;
  dt: number;
};
export type ListItemProps = {
  weather: WeatherProps[];
  currentWeather: WeatherProps | null;
  onOpenItem: (user: WeatherProps) => void;
};

export type WeatherMain = {
  temp_max: number;
  temp_min: number;
  humidity: number;
};

export type WeatherWind = {
  speed: number;
};

export type Weather = {
  description: string;
  icon: string;
  id: number;
};

export type WeatherListProps = {
  weather: WeatherProps;
};
