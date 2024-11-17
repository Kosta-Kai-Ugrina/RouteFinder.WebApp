import { useCallback, useMemo, useState } from "react";
import { useAddressContext } from "../../../context/AddressContext";
import { useJsApiLoader } from "@react-google-maps/api";

export const useMap = () => {
  const { addressStart } = useAddressContext();

  const center = useMemo(
    () => ({
      lat: addressStart.latitude!,
      lng: addressStart.longitude!,
    }),
    [addressStart]
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map: any) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback((map: any) => {
    setMap(null);
  }, []);

  return { center, onLoad, onUnmount, isLoaded };
};
