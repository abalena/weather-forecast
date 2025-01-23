"use client";

import { useUserLocation, useWeatherData } from "@/hooks";

import { LoadingIndicator } from "../loading-indicator/loading-indicator";
import { WeatherWidget } from "../weather-widget/weather-widget";

export function WeatherPage() {
  const { location, isLoading } = useUserLocation();

  const data = useWeatherData(location);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="p-6">
        {!location ? (
          <p className="text-xl text-center">
            To get weather forecast, please allow sharing your location.
          </p>
        ) : (
          <WeatherWidget />
        )}
      </div>
    </section>
  );
}
