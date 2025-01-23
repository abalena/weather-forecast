import { ILocation } from "@/interfaces";

export const getApiCallUrl = (
  url: string,
  location: ILocation,
  apiKey: string
) => {
  return `${url}?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`;
};
