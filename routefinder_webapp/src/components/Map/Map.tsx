import { Box, Typography } from "@mui/material";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { FC } from "react";

type Props = {};

const Map: FC<Props> = (props: Props) => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: 55.66221993583325,
    lng: 12.577998762094255,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAmEU3Al48aFyYO_cjmGB0yNVIpFaK1bMw",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

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
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      <div>
        <Typography variant="h2">The map</Typography>
      </div>
    </>
  ) : (
    <></>
  );
};

export default React.memo(Map);
