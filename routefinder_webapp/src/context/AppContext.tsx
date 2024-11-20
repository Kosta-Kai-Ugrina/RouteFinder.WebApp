import React, { createContext, useContext, useState, ReactNode } from "react";
import { Address, RouteResponse } from "../types";

const defaultAddressStart: Address = {};

const defaultDestinationList: Address[] = [{}];

interface AppContextType {
  isFetching: boolean;
  optimizedRoute: Address[] | null;
  error: string | null;
  routePolyline: google.maps.LatLng[] | null;
  duration: number | null;
  distanceMeters: number | null;
  addressStart: Address;
  addressDestinationList: Address[];
  setIsFetching: (value: boolean) => void;
  setOptimizedRoute: (value: Address[] | null) => void;
  setError: (error: string | null) => void;
  setRouteDataResponse: (routeData: RouteResponse | null) => void;
  setAddresses: (route: {
    addressStart?: Address | undefined;
    addressDestinationList?: Address[] | undefined;
  }) => void;
  updateDestinationAddressAt: (address: Address, index: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [optimizedRoute, setOptimizedRoute] = useState<Address[] | null>(null);
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
      setOptimizedRoute(null);
      setAddressDestinationList(route.addressDestinationList);
    }
  };

  const setRouteDataResponse = (routeData: RouteResponse | null) => {
    setError(null);
    setRoutePolyline(routeData?.polyline ?? null);
    setDuration(routeData?.duration ?? null);
    setDistanceMeters(routeData?.distanceMeters ?? null);
    setOptimizedRoute(routeData?.optimizedRoute ?? null);
  };

  const updateDestinationAddressAt = (address: Address, index: number) => {
    setError(null);
    setAddressDestinationList((curr) => {
      curr[index] = address;
      return [...curr];
    });
  };

  return (
    <AppContext.Provider
      value={{
        isFetching,
        optimizedRoute,
        error,
        routePolyline,
        duration,
        distanceMeters,
        addressStart,
        addressDestinationList,
        setIsFetching,
        setOptimizedRoute,
        setError,
        setRouteDataResponse,
        setAddresses,
        updateDestinationAddressAt,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
