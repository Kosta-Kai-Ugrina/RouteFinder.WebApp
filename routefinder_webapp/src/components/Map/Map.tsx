import { Box, Typography } from "@mui/material";
import { GoogleMap, Polyline, useJsApiLoader } from "@react-google-maps/api";
import React, { FC } from "react";
import { useAddressContext } from "../../context/AddressContext";
import * as polyline from "polyline";

type Props = {};

const Map: FC<Props> = (props: Props) => {
  const { addressStart, addressDestinationList, setAddresses } =
    useAddressContext();

  console.log("map", { ...addressStart });
  console.log("map", addressDestinationList);

  const encodedPolyLine = "wnvrIotwkAvBzKhCzL\\p@x@jAFZX`@";
  const decodedPolyLine = polyline.decode(encodedPolyLine);
  const toLatLng = (x: number[]) => {
    return { lat: x[0], lng: x[1] };
  };
  const polyLine = decodedPolyLine.map(toLatLng);

  const POLYLINE_OPTIONS = {
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  };
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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
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
        <Polyline options={POLYLINE_OPTIONS} path={polyLine} />
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
