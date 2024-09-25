
const IconWeather = ({ iconCode }: { iconCode: string }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return <img src={iconUrl} alt="weather icon" />;
};

export default IconWeather;
