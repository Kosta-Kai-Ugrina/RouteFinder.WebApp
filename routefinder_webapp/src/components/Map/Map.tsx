import { GoogleMap, OverlayView, useJsApiLoader } from "@react-google-maps/api";
import React, { CSSProperties, FC, PropsWithChildren } from "react";
import { useAddressContext } from "../../context/AddressContext";
import * as polyline from "polyline";
import { Polyline } from "./Shapes/Polyline";
import { Markers } from "./Shapes/Markers";

import iconWarehouse from "../../assets/iconWarehouse.svg";
import iconReact from "../../assets/logo192.png";
import { Icon, SvgIcon } from "@mui/material";

const parser = new DOMParser();

type Props = {};

const Map: FC<PropsWithChildren<Props>> = ({ children }) => {
  const { addressStart, addressDestinationList, setAddresses } =
    useAddressContext();

  const encodedPolyLine = "wnvrIotwkAvBzKhCzL\\p@x@jAFZX`@";

  const containerStyle: CSSProperties = {
    width: "100vw",
    height: "100vh",
  };

  const center = {
    lat: addressStart.latitude!,
    lng: addressStart.longitude!,
  };

  const { isLoaded } = useJsApiLoader({
    mapIds: ["DEMO_MAP_ID"],
    // googleMapsClientId: "DEMO_MAP_ID",
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    map.mapId = "DEMO_MAP_ID";
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  // const fallback = parser.parseFromString(
  //   iconWarehouse,
  //   "image/svg+xml"
  // ).documentElement;

  // const beachFlagMarkerView = new google.maps.marker.AdvancedMarkerElement({
  //   map,
  //   position: { lat: 55.66020591154689, lng: 12.572785483070883 },
  //   content: fallback,
  //   title: "A marker using a custom PNG Image",
  // });

  return isLoaded ? (
    <>
      <GoogleMap
        id="DEMO_MAP_ID"
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
