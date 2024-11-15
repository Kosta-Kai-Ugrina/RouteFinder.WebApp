import React, { ReactNode, useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";
import { toAddress } from "./searchBoxUtils";
import { useAddressContext } from "../../../context/AddressContext";
import { Address } from "../../../types";
import { Search } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { AddRemoveButtonGroup } from "./AddRemoveButtonGroup";

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
      <SearchBox
        label={`Delivery address ${i + 1}`}
        key={`destinationSearchBox${i}`}
        onPlaceSelected={(place) => {
          const address = toAddress(place);
          updateDestinationAddressAt(address, i);
        }}
        value={addressDestinationList[i].name ?? ""}
      />
    );
  });
}
