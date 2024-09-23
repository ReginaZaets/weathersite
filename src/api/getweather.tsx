const key = "b61161c396f0353ae2491f4c8b857073";

export const getWeather = async (city: string) => {
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=${key}&query=${city}`
  );
  if (!response.ok) {
    throw new Error(`Ошибка сервера: ${response.status}`);
  }
  const reposData = await response.json();

  if (reposData.error) {
    throw new Error(`Ошибка от Weatherstack API: ${reposData.error.info}`);
  }
  return reposData;
};
