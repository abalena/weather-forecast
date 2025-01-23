import { getApiCallUrl } from "@/helpers";

export const fetchWeatherData = async (latitude: number, longitude: number) => {
  const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY!;
  const weatherApiUrl = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_URL!;

  const requestUrl = getApiCallUrl(
    weatherApiUrl,
    { latitude, longitude },
    apiKey
  );

  const response = await fetch(requestUrl);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
