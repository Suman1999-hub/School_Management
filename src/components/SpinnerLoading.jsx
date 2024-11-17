import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function SpinnerLoading() {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="200"
        color="#006aff"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

export default SpinnerLoading;
