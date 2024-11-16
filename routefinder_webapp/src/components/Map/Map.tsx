import { GoogleMap, OverlayView, useJsApiLoader } from "@react-google-maps/api";
import React, { CSSProperties, FC, PropsWithChildren, useEffect } from "react";
import { useAddressContext } from "../../context/AddressContext";
import { Polyline } from "./Shapes/Polyline";
import { Markers } from "./Shapes/Markers";

const parser = new DOMParser();

type Props = {};

const Map: FC<PropsWithChildren<Props>> = ({ children }) => {
  const { addressStart, addressDestinationList, routePolyline } =
    useAddressContext();

  const containerStyle: CSSProperties = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: addressStart.latitude!,
    lng: addressStart.longitude!,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          clickableIcons: false,
          disableDefaultUI: true,
        }}
      >
        {children}
        <Polyline />
        <Markers />
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default React.memo(Map);
