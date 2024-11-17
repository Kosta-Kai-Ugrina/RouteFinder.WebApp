import { GoogleMap } from "@react-google-maps/api";
import React, { CSSProperties, FC, memo, PropsWithChildren } from "react";
import { Polyline } from "./Polyline/Polyline";
import { Markers } from "./Markers/Markers";
import { useMap } from "./hooks/useMap";

interface Props {}

const Map: FC<PropsWithChildren<Props>> = ({ children }) => {
  const { center, isLoaded, onLoad, onUnmount } = useMap();

  const containerStyle: CSSProperties = {
    width: "100vw",
    height: "100vh",
  };

  const mapOptions: google.maps.MapOptions = {
    fullscreenControl: false,
    streetViewControl: false,
    clickableIcons: false,
    disableDefaultUI: true,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      {children}
      <Polyline />
      <Markers />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default memo(Map);
