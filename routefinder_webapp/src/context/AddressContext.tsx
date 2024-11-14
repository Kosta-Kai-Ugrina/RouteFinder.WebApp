import React, { createContext, useContext, useState, ReactNode } from "react";
import { Address } from "../types";

const defaultAddressStart: Address = {
  name: "Mover Systems",
  latitude: 55.66221993583325,
  longitude: 12.577998762094255,
};

interface AddressContextType {
  addressStart: Address;
  addressDestinationList: Address[];
  setAddresses: (
    addressStart: Address,
    addressDestinationList: Address[]
  ) => void;
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
  const [addressStart, setAddressStart] =
    useState<Address>(defaultAddressStart);
  const [addressDestinationList, setAddressDestinationList] = useState<
    Address[]
  >([]);

  const setAddresses = (
    addressStart: Address,
    addressDestinationList: Address[]
  ) => {
    setAddressStart(addressStart);
    setAddressDestinationList(addressDestinationList);
  };

  return (
    <AddressContext.Provider
      value={{ addressStart, addressDestinationList, setAddresses }}
    >
      {children}
    </AddressContext.Provider>
  );
};
