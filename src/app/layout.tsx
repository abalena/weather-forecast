import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather Forecast",
  description: "What is the weather today?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen max-h-screen w-full flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
