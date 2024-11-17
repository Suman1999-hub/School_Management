import React from "react";
import { Spinner } from "reactstrap";

function SpinnerLoading() {
  return (
    <div>
      <Spinner color="primary" type="grow">
        Loading...
      </Spinner>
      <Spinner color="success" type="grow">
        Loading...
      </Spinner>
      <Spinner color="danger" type="grow">
        Loading...
      </Spinner>
      <Spinner color="warning" type="grow">
        Loading...
      </Spinner>
      <Spinner color="info" type="grow">
        Loading...
      </Spinner>
    </div>
  );
}

export default SpinnerLoading;
