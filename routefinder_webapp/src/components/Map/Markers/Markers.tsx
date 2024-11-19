import React, { FC } from "react";
import iconWarehouse from "../../../assets/iconWarehouse.svg";
import iconDeliveryAddress from "../../../assets/iconDeliveryAddress.svg";
import { useAppContext } from "../../../context/AddressContext";
import { Address } from "../../../types";
import { toLatLng } from "../../../utils/generalUtils";
import { Marker } from "./Marker";

export const Markers: FC = () => {
  const { addressStart, addressDestinationList } = useAppContext();
  const addressStartLatLng = toLatLng(addressStart);

  return (
    <>
      <Marker key="markerStart" pos={addressStartLatLng} icon="warehouse" />
      {addressDestinationList.map((addr, i) => (
        <Marker
          key={`markerDest${i}`}
          icon="deliveryAddress"
          pos={toLatLng(addr)}
        />
      ))}
    </>
  );
};
