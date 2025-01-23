"use client";
import { useState } from "react";
import Image from "next/image";

import { useWeatherData } from "@/hooks";
import { ILocation } from "@/interfaces";

import { ErrorPopover } from "../error-popover/error-popover";
import { LoadingIndicator } from "../loading-indicator/loading-indicator";

export enum WeatherWidgetSize {
  small = "small",
  wide = "wide",
  large = "large",
}

interface WeatherWidgetProps {
  location: ILocation;
  size?: WeatherWidgetSize;
}

const DEFAULT_CLASSNAME_BY_SIZE: Record<WeatherWidgetSize, string> = {
  [WeatherWidgetSize.small]: "flex-col col-span-2 row-span-2",
  [WeatherWidgetSize.wide]: "col-span-4 row-span-2",
  [WeatherWidgetSize.large]: "col-span-4 row-span-4",
};

const imageUrl = "https://openweathermap.org/img/wn/";

export function WeatherWidget({
  location,
  size = WeatherWidgetSize.small,
}: WeatherWidgetProps) {
  const { data, isLoading, error } = useWeatherData(location);
  const [popoverVisible, setPopoverVisible] = useState<boolean>(!!error);

  const defaultClassName = `py-4 px-8 flex justify-between items-center gap-3 ${DEFAULT_CLASSNAME_BY_SIZE[size]} bg-blue-500 text-white text-center rounded-lg`;

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error && !popoverVisible) {
    setPopoverVisible(true);
  }

  return (
    !!data && (
      <div className={defaultClassName}>
        <div className="flex flex-col gap-1">
          <div>{data.name}</div>
          <div>
            <span className="text-4xl">{Math.round(data.main.temp)}</span>
            <span>&#176;</span>C
          </div>
          <div>
            Feels {Math.round(data.main.feels_like)}
            <span>&#176;</span>C
          </div>
        </div>
        <div>
          <Image
            alt={data.weather[0].main}
            src={`${imageUrl}${data.weather[0].icon}@2x.png`}
            width={50}
            height={50}
          />
        </div>
        {size !== WeatherWidgetSize.small && (
          <div className="text-sm text-start">
            <div>Wind: {data.wind.speed} m/sec</div>
            <div>Humidity: {data.main.humidity} %</div>
          </div>
        )}
        {popoverVisible && <ErrorPopover message={error} />}
      </div>
    )
  );
}

export default WeatherWidget;
