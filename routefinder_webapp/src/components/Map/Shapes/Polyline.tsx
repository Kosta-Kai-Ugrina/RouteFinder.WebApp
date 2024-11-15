import React, { FC } from "react";

import { Polyline as GooglePolyline } from "@react-google-maps/api";
import { toPolylinePath } from "./polylineUtils";

interface Props {
  polylineEncoded: string;
}

export const Polyline: FC<Props> = ({ polylineEncoded }) => {
  const polylineOptions: google.maps.PolylineOptions = {
    strokeColor: "#04f",
    strokeOpacity: 1.0,
    strokeWeight: 5,
    clickable: false,
  };

  const polylinePath = toPolylinePath(polylineEncoded);

  return <GooglePolyline options={polylineOptions} path={polylinePath} />;
};
