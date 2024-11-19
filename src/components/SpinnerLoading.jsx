import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function SpinnerLoading() {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="200"
        color="#f0079a"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

export default SpinnerLoading;
