import React, { FC } from "react";
import { Polyline as GooglePolyline } from "@react-google-maps/api";
import { useAddressContext } from "../../../context/AddressContext";

interface Props {}

export const Polyline: FC<Props> = () => {
  const { routePolyline } = useAddressContext();

  const polylineOptions: google.maps.PolylineOptions = {
    strokeColor: "#39f",
    strokeOpacity: 1.0,
    strokeWeight: 5,
    clickable: false,
  };

  return (
    <GooglePolyline
      options={polylineOptions}
      path={routePolyline ?? undefined}
    />
  );
};
