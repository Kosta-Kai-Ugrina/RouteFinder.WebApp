import React, { ReactNode, useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";
import { toAddress } from "./searchBoxUtils";
import { useAddressContext } from "../../../context/AddressContext";
import { Address } from "../../../types";
import { Search } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { AddRemoveButtonGroup } from "./AddRemoveButtonGroup";

export const DestinationAddressSearchBoxList = () => {
  const { addressDestinationList, setAddresses } = useAddressContext();
  const [searchBoxList, setSearchBoxList] = useState<ReactNode>([]);

  useEffect(() => {
    const searchBoxes = addressesToSearchBoxes(
      addressDestinationList,
      setAddresses
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
  setAddresses: (route: {
    addressStart?: Address | undefined;
    addressDestinationList?: Address[] | undefined;
  }) => void
): ReactNode[] {
  return addressDestinationList.map((_, i) => {
    return (
      <SearchBox
        key={`destinationSearchBox${i}`}
        onPlaceSelected={(place) => {
          const address = toAddress(place);
          addressDestinationList[i] = address;
          setAddresses({ addressDestinationList: [...addressDestinationList] });
        }}
      />
    );
  });
}
