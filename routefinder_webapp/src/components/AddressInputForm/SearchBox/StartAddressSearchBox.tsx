import React, { FC } from "react";
import { SearchBox } from "./SearchBox";
import { useAddressContext } from "../../../context/AddressContext";
import { toAddress } from "./searchBoxUtils";
import { Stack } from "@mui/material";
import iconWarehouse from "../../../assets/iconWarehouse.svg";
import { ReactComponent as YourSvg } from "../../../assets/iconWarehouse.svg";

export const StartAddressSearchBox: FC = () => {
  const { addressStart, setAddresses } = useAddressContext();

  return (
    <Stack direction="row">
      {/* <div
        style={{
          width: 60,
          height: 60,
          padding: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <YourSvg width={30} height={30} />
      </div> */}
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
