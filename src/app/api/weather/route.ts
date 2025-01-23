import { NextResponse } from "next/server";
import { fetchWeatherData } from "@/services/";

export async function POST(req: Request) {
  try {
    if (!req.body) {
      return NextResponse.json(
        { error: "Empty request body" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { latitude, longitude } = body;

    if (!latitude || !longitude) {
      return NextResponse.json(
        { error: "Missing latitude or longitude" },
        { status: 400 }
      );
    }

    const weatherData = await fetchWeatherData(latitude, longitude);
    return NextResponse.json(weatherData);
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }
}
