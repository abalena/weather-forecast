"use client";

import { Grid } from "react-loader-spinner";

export function LoadingIndicator() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#FFFF00"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}

export default LoadingIndicator;
