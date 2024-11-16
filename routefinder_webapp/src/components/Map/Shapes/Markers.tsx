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
  // google.maps.marker.AdvancedMarkerElement
  // const options: google.maps.MarkerOptions = {
  //   anchorPoint: new google.maps.Point(50, 300),
  // };

  const toDeliveryAddressMarker = (pos: google.maps.LatLng, index: number) => {
    return (
      <Marker
        key={`markerDeliveryAddress${index}`}
        icon={{
          url: iconDeliveryAddress,
          anchor: new google.maps.Point(12, 12),
        }}
        position={pos}
      />
    );
  };
  return (
    <>
      <Marker
        key="markerStart"
        position={firstNode}
        icon={{
          url: iconWarehouse,
          anchor: new google.maps.Point(12, 12),
        }}
      />
      {remainingNodes.map(toDeliveryAddressMarker)}
    </>
  );
};
