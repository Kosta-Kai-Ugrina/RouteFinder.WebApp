import { Button } from "@mui/material";
import React, { FC } from "react";
import { useAddressContext } from "../../../context/AddressContext";
import { findFastestRoute } from "../../../api/routeFinderApi";
import { Address } from "../../../types";

export const FindRouteButton: FC = () => {
  const { addressStart, addressDestinationList } = useAddressContext();
  const makeRequest = () => {
    const addressDestinationListFixed = fixDestinationList(
      addressDestinationList
    );
    const result = findFastestRoute({
      addressStart,
      addressDestinationList: addressDestinationListFixed,
    });
    console.log("FIND ROUTE RESULT");
    console.log(result);
  };

  return (
    <Button color="primary" variant="contained" onClick={makeRequest}>
      Find Route
    </Button>
  );
};

function fixDestinationList(addressDestinationList: Address[]): Address[] {
  const fixed = addressDestinationList.filter(
    (addr) => addr.latitude !== undefined && addr.longitude !== undefined
  );

  return fixed;
}
