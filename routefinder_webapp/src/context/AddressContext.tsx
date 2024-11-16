import React, { createContext, useContext, useState, ReactNode } from "react";
import { Address, RouteResponse } from "../types";

const defaultAddressStart: Address = {
  name: "Mover Systems",
  latitude: 55.66221993583325,
  longitude: 12.577998762094255,
};

const defaultDestinationList: Address[] = [{}];

interface AddressContextType {
  error: string | null;
  routePolyline: google.maps.LatLng[] | null;
  duration: number | null;
  distanceMeters: number | null;
  addressStart: Address;
  addressDestinationList: Address[];
  setError: (error: string | null) => void;
  setRouteDataResponse: (routeData: RouteResponse | null) => void;
  setAddresses: (route: {
    addressStart?: Address | undefined;
    addressDestinationList?: Address[] | undefined;
  }) => void;
  updateDestinationAddressAt: (address: Address, index: number) => void;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const useAddressContext = (): AddressContextType => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddressContext must be used within an AddressProvider");
  }
  return context;
};

interface AddressProviderProps {
  children: ReactNode;
}

export const AddressProvider: React.FC<AddressProviderProps> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [routePolyline, setRoutePolyline] = useState<
    google.maps.LatLng[] | null
  >(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [distanceMeters, setDistanceMeters] = useState<number | null>(null);
  const [addressStart, setAddressStart] = useState(defaultAddressStart);
  const [addressDestinationList, setAddressDestinationList] = useState(
    defaultDestinationList
  );

  const setAddresses = (route: {
    addressStart?: Address | undefined;
    addressDestinationList?: Address[] | undefined;
  }) => {
    if (route.addressStart !== undefined) {
      setError(null);
      setAddressStart(route.addressStart);
    }
    if (route.addressDestinationList !== undefined) {
      setError(null);
      setAddressDestinationList(route.addressDestinationList);
    }
  };

  const setRouteDataResponse = (routeData: RouteResponse | null) => {
    setError(null);
    setRoutePolyline(routeData?.polyline ?? null);
    setDuration(routeData?.duration ?? null);
    setDistanceMeters(routeData?.distanceMeters ?? null);
  };

  const updateDestinationAddressAt = (address: Address, index: number) => {
    setError(null);
    setAddressDestinationList((curr) => {
      curr[index] = address;
      return [...curr];
    });
  };

  return (
    <AddressContext.Provider
      value={{
        error,
        routePolyline,
        duration,
        distanceMeters,
        addressStart,
        addressDestinationList,
        setError,
        setRouteDataResponse,
        setAddresses,
        updateDestinationAddressAt,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
