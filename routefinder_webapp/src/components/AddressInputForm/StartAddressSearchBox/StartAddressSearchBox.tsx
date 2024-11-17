import React, { CSSProperties, FC } from "react";
import { SearchBox } from "../SearchBox/SearchBox";
import { useAddressContext } from "../../../context/AddressContext";
import { toAddress } from "../../../utils/searchBoxUtils";
import { Stack } from "@mui/material";
import iconWarehouse from "../../../assets/iconWarehouse.svg";
import { ReactComponent as Icon } from "../../../assets/iconWarehouse.svg";

export const StartAddressSearchBox: FC = () => {
  const { addressStart, setAddresses } = useAddressContext();

  const borderStyle: CSSProperties = {
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "red",
  };

  const iconSize = 40;

  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      direction="row"
    >
      <Icon width={iconSize} height={iconSize} />
      <SearchBox
        key="searchBoxStartAddress"
        onPlaceSelected={(placeSelected) => {
          const address = toAddress(placeSelected);
          setAddresses({ addressStart: address });
        }}
        value={addressStart.name ?? ""}
        label="Warehouse"
      />
    </Stack>
  );
};
