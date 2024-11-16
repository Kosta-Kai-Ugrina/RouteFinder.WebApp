import React, { FC } from "react";
import { Marker } from "@react-google-maps/api";
import iconWarehouse from "../../../assets/iconWarehouse.svg";
import iconDeliveryAddress from "../../../assets/iconDeliveryAddress.svg";
import { useAddressContext } from "../../../context/AddressContext";
import { Address } from "../../../types";

type Props = {};

export const Markers: FC<Props> = () => {
  const { addressStart, addressDestinationList } = useAddressContext();
  const addressStartLatLng = toLatLng(addressStart);
  const toDeliveryAddressMarker = (address: Address, index: number) => {
    const pos = toLatLng(address);
    return pos === null ? (
      <></>
    ) : (
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
      {addressStartLatLng === null ? (
        <></>
      ) : (
        <Marker
          key="markerStart"
          position={addressStartLatLng!}
          icon={{
            url: iconWarehouse,
            anchor: new google.maps.Point(12, 12),
          }}
        />
      )}
      {addressDestinationList.map(toDeliveryAddressMarker)}
    </>
  );
};

function toLatLng(address: Address): google.maps.LatLng | null {
  if (address.latitude === undefined || address.latitude === undefined) {
    return null;
  }

  return new google.maps.LatLng({
    lat: address.latitude!,
    lng: address.longitude!,
  });
}
