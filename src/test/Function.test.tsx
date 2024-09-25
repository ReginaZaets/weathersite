import { filterFutureWeather } from "../lib/function";
import { WeatherProps } from "../lib/types";

describe("функция filterFutureWeather", () => {
  it("корректная дата", () => {
    const mockData: WeatherProps[] = [
      {
        dt_txt: "2024-09-26 12:00:00",
        main: { temp_max: 293.15, temp_min: 290.15, humidity: 60 },
        name: "Location A",
        wind: { speed: 5 },
        weather: [{ id: 801, description: "few clouds", icon: "02d" }],
        dt: 1234567890,
      },
      {
        dt_txt: "2024-09-27 12:00:00",
        main: { temp_max: 295.15, temp_min: 292.15, humidity: 65 },
        name: "Location B",
        wind: { speed: 3 },
        weather: [
          {
            id: 802,
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        dt: 1234567891,
      },
    ];

    const result = filterFutureWeather(mockData);
    expect(result).toHaveLength(2);
    expect(result[0].dt_txt).toBe("2024-09-26 12:00:00");
  });
});
