"use client";

import { useEffect, useState } from "react";

import { API } from "@/constants";
import { asyncHookCallWrapper, handleError } from "@/helpers";
import { IAsyncLoadingHook, ILocation } from "@/interfaces";

export const useWeatherData = (
  location: ILocation | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): IAsyncLoadingHook<any> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weather, setWeather] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const requestUrl = API.post.weather;

  useEffect(() => {
    if (!requestUrl || !location) {
      return;
    }

    const executeFn = async () => {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(location),
      };

      const res = await fetch(requestUrl, config);

      if (!res.ok) {
        handleError(`Failed to fetch weather data: ${res.statusText}`);
      }

      const data = await res.json();
      setWeather(data);
    };

    const getWeatherData = asyncHookCallWrapper(
      executeFn,
      setIsLoading,
      setError
    );

    getWeatherData();
  }, [location, requestUrl]);

  return { data: weather, isLoading, error };
};
