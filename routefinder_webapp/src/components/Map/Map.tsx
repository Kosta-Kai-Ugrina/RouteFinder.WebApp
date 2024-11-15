import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { CSSProperties, FC, PropsWithChildren } from "react";
import { useAddressContext } from "../../context/AddressContext";
import * as polyline from "polyline";
import { Polyline } from "./Shapes/Polyline";
import { Markers } from "./Shapes/Markers";

type Props = {};

const Map: FC<PropsWithChildren<Props>> = ({ children }) => {
  const { addressStart, addressDestinationList, setAddresses } =
    useAddressContext();

  const encodedPolyLine = "wnvrIotwkAvBzKhCzL\\p@x@jAFZX`@";
  const decodedPolyLine = polyline.decode(encodedPolyLine);
  const toLatLng = (x: number[]) => {
    return { lat: x[0], lng: x[1] };
  };
  const polyLine = decodedPolyLine.map(toLatLng);
  const polylineOptions: google.maps.PolylineOptions = {
    strokeColor: "#f0f",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    clickable: false,
  };

  const containerStyle: CSSProperties = {
    width: "100vw",
    height: "100vh",
    float: "inline-start",
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
          // clickableIcons: false,
          disableDefaultUI: true,
        }}
      >
        {children}
        <Polyline polylineEncoded={encodedPolyLine} />
        <Markers polylineEncoded={encodedPolyLine} />
        <></>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default React.memo(Map);
