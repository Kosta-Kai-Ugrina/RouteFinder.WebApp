import React, { ReactNode, useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";
import { toAddress } from "./searchBoxUtils";
import { useAddressContext } from "../../../context/AddressContext";
import { Address } from "../../../types";
import { Search } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { AddRemoveButtonGroup } from "./AddRemoveButtonGroup";
import { ReactComponent as Icon } from "../../../assets/iconDeliveryAddress.svg";

const iconSize = 40;

export const DestinationAddressSearchBoxList = () => {
  const { addressDestinationList, updateDestinationAddressAt } =
    useAddressContext();
  const [searchBoxList, setSearchBoxList] = useState<ReactNode>([]);

  useEffect(() => {
    const searchBoxes = addressesToSearchBoxes(
      addressDestinationList,
      updateDestinationAddressAt
    );
    setSearchBoxList(searchBoxes);
  }, [addressDestinationList]);

  return (
    <Stack direction={"row"} spacing={2}>
      <Stack spacing={2}>{searchBoxList}</Stack>
      <AddRemoveButtonGroup />
    </Stack>
  );
};

function addressesToSearchBoxes(
  addressDestinationList: Address[],
  updateDestinationAddressAt: (address: Address, index: number) => void
): ReactNode[] {
  return addressDestinationList.map((_, i) => {
    return (
      <Stack
        key={`containerAddressDestinationSearchBox${i}`}
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        direction="row"
      >
        <Icon key={`iconDestination${i}`} width={iconSize} height={iconSize} />
        <SearchBox
          label={`Delivery address ${i + 1}`}
          key={`destinationSearchBox${i}`}
          onPlaceSelected={(place) => {
            const address = toAddress(place);
            updateDestinationAddressAt(address, i);
          }}
          value={addressDestinationList[i].name ?? ""}
        />
      </Stack>
    );
  });
}
