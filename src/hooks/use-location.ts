"use client";

import { useEffect, useState } from "react";

import { ILocation } from "@/interfaces";

export const useUserLocation = () => {
  const [location, setLocation] = useState<ILocation | null>(null);
  const [isError, setIsError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setIsError("Geolocation is not supported by your browser.");
      setIsLoading(false);
      return;
    }
    const successCallback = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setIsLoading(false);
    };

    const errorCallback = (error: GeolocationPositionError) => {
      setIsError(error.message || "Unable to get location.");
      setIsLoading(false);
    };
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return { location, isError, isLoading };
};
