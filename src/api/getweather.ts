const key = "865e99d5db39ddb7a49c55e485e80dbf";

export const getCurrentWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`
  );
  if (response.status === 404) {
    throw new Error("Город не найден, введите другой город");
  }
  if (!response.ok) {
    throw new Error(`Ошибка сервера: ${response.status}`);
  }
  const reposData = await response.json();

  if (reposData.error) {
    throw new Error(`Ошибка: ${reposData.error.info}`);
  }

  return reposData;
};
