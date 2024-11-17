import { Marker as GoogleMarker } from "@react-google-maps/api";
import React, { FC } from "react";
import iconWarehouse from "../../../assets/iconWarehouse.svg";
import iconDeliveryAddress from "../../../assets/iconDeliveryAddress.svg";
import { IconType } from "../../../types";

interface Props {
  pos: google.maps.LatLng | null;
  icon: IconType;
}

export const Marker: FC<Props> = ({ pos, icon }) => {
  return pos === null ? (
    <></>
  ) : (
    <GoogleMarker
      icon={{
        url: icon === "warehouse" ? iconWarehouse : iconDeliveryAddress,
        anchor: new google.maps.Point(25, 25),
      }}
      position={pos}
    />
  );
};
