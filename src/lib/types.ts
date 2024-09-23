export type WeatherProps = {
  name: string;
  temperature: number;
  wind_speed: number;
  humidity: number;
  weather_icons: string;
};
export type ListItemProps = {
  weather: WeatherProps[];
  currentWeather: WeatherProps | null;
  onOpenItem: (user: WeatherProps) => void;
};
