import React, { FC } from "react";
import { toPolylinePath } from "./polylineUtils";
import { Marker } from "@react-google-maps/api";
import iconWarehouse from "../../../assets/iconWarehouse.svg";
import iconDeliveryAddress from "../../../assets/iconDeliveryAddress.svg";

type Props = {
  polylineEncoded: string;
};

export const Markers: FC<Props> = ({ polylineEncoded }) => {
  const polylinePath = toPolylinePath(polylineEncoded);
  const [firstNode, ...remainingNodes] = polylinePath;
  const toDeliveryAddressMarker = (pos: google.maps.LatLng) => (
    <Marker icon={iconDeliveryAddress} position={pos} />
  );

  return (
    <>
      <Marker position={firstNode} icon={iconWarehouse} />
      {remainingNodes.map(toDeliveryAddressMarker)}
    </>
  );
};
