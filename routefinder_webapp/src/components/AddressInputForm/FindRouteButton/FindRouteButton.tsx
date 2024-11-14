import { Button } from "@mui/material";
import React, { FC } from "react";
import { useAddressContext } from "../../../context/AddressContext";
import { findFastestRoute } from "../../../api/routeFinderApi";

export const FindRouteButton: FC = () => {
  const { addressStart, addressDestinationList } = useAddressContext();
  return (
    <Button
      color="primary"
      variant="contained"
      onClick={() => {
        const result = findFastestRoute({
          addressStart,
          addressDestinationList,
        });
        console.log("FIND ROUTE RESULT");
        console.log(result);
      }}
    >
      Find Route
    </Button>
  );
};
