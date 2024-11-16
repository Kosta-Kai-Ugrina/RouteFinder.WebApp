import React, { createContext, useContext, useState, ReactNode } from "react";
import { Address, RouteResponse } from "../types";

const defaultAddressStart: Address = {
  name: "Mover Systems",
  latitude: 55.66221993583325,
  longitude: 12.577998762094255,
};

const defaultDestinationList: Address[] = [{}];

interface AddressContextType {
  routePolyline: google.maps.LatLng[] | null;
  duration: number | null;
  distanceMeters: number | null;
  addressStart: Address;
  addressDestinationList: Address[];
  setAddresses: (route: {
    addressStart?: Address | undefined;
    addressDestinationList?: Address[] | undefined;
  }) => void;
  updateDestinationAddressAt: (address: Address, index: number) => void;
  setRouteDataResponse: (routeData: RouteResponse | null) => void;
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
      setAddressStart(route.addressStart);
    }
    if (route.addressDestinationList !== undefined) {
      setAddressDestinationList(route.addressDestinationList);
    }
  };

  const setRouteDataResponse = (routeData: RouteResponse | null) => {
    setRoutePolyline(routeData?.polyline ?? null);
    setDuration(routeData?.duration ?? null);
    setDistanceMeters(routeData?.distanceMeters ?? null);
  };

  const updateDestinationAddressAt = (address: Address, index: number) => {
    setAddressDestinationList((curr) => {
      curr[index] = address;
      return [...curr];
    });
  };

  return (
    <AddressContext.Provider
      value={{
        routePolyline,
        duration,
        distanceMeters,
        addressStart,
        addressDestinationList,
        setAddresses,
        updateDestinationAddressAt,
        setRouteDataResponse,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
