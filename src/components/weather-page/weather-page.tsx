"use client";

import { useUserLocation } from "@/hooks";

import {
  WeatherWidget,
  WeatherWidgetSize,
} from "../weather-widget/weather-widget";

export function WeatherPage() {
  const { location, isLoading } = useUserLocation();

  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="p-6 w-[500px] h-[800px]">
        {!location || isLoading ? (
          <p className="text-xl text-center">
            To get weather forecast, please allow sharing your location.
          </p>
        ) : (
          <div className="w-full h-full grid gap-4 grid-cols-4 grid-rows-8">
            <WeatherWidget size={WeatherWidgetSize.small} location={location} />
            <WeatherWidget size={WeatherWidgetSize.wide} location={location} />
            <WeatherWidget size={WeatherWidgetSize.large} location={location} />
          </div>
        )}
      </div>
    </section>
  );
}
