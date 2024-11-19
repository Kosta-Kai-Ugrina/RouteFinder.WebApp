import React, { CSSProperties, FC } from "react";
import { SearchBox } from "../SearchBox/SearchBox";
import { useAppContext } from "../../../context/AddressContext";
import { toAddress } from "../../../utils/searchBoxUtils";
import { Stack } from "@mui/material";
import iconWarehouse from "../../../assets/iconWarehouse.svg";
import { ReactComponent as Icon } from "../../../assets/iconWarehouse.svg";
import { IconSearchBox } from "../IconSearchBox/IconSearchBox";

export const StartAddressSearchBox: FC = () => {
  const { addressStart, setAddresses } = useAppContext();

  return (
    <IconSearchBox
      key="searchBoxStartAddress"
      onPlaceSelected={(placeSelected) => {
        const address = toAddress(placeSelected);
        setAddresses({ addressStart: address });
      }}
      value={addressStart.name ?? ""}
      label="Warehouse"
      icon="warehouse"
    />
  );
};
