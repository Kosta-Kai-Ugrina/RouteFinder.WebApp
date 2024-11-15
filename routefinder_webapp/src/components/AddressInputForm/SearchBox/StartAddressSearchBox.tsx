import React, { FC } from "react";
import { SearchBox } from "./SearchBox";
import { useAddressContext } from "../../../context/AddressContext";
import { toAddress } from "./searchBoxUtils";

export const StartAddressSearchBox: FC = () => {
  const { addressStart, setAddresses } = useAddressContext();

  return (
    <SearchBox
      key="searchBoxStartAddress"
      onPlaceSelected={(placeSelected) => {
        const address = toAddress(placeSelected);
        setAddresses({ addressStart: address });
      }}
      value={addressStart.name ?? ""}
    />
  );
};
