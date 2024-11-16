import { Button, Tooltip } from "@mui/material";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useAddressContext } from "../../../context/AddressContext";
import { findFastestRoute } from "../../../api/routeFinderApi";
import { Address, RequestValidationResult } from "../../../types";
import {
  isAddressValid,
  validateRequest,
} from "../../../utils/routeRequestValidation";
import { AxiosError } from "axios";

export const FindRouteButton: FC = () => {
  const {
    error,
    setError,
    addressStart,
    addressDestinationList,
    setRouteDataResponse,
  } = useAddressContext();
  const makeRequest = () => {
    setRouteDataResponse(null);

    const addressDestinationListFixed = fixDestinationList(
      addressDestinationList
    );

    const validationResult = validateRequest(
      addressStart,
      addressDestinationListFixed
    );

    if (!validationResult.isValid) {
      setError(validationResult.error!);
      console.log("Request is invalid. Reason: ", validationResult.error);
      return;
    }

    setError(null);
    console.log("Request is valid, attempting request...");

    const result = findFastestRoute({
      addressStart,
      addressDestinationList: addressDestinationListFixed,
    });
    result
      .then((routeData) => {
        setRouteDataResponse(routeData);
      })
      .catch((e) => {
        if (e instanceof AxiosError) {
          const axiosError = e as AxiosError;
          setError(axiosError.message);
        }
        console.log("ERROR", e);
      });
  };

  const [isDataValid, setIsDataValid] = useState(true);
  useEffect(() => {
    const validationResult = validateRequest(
      addressStart,
      addressDestinationList
    );
    setIsDataValid(validationResult.isValid);
  }, [addressStart, addressDestinationList]);

  return (
    <Tooltip
      title={isDataValid ? undefined : "Data entered is invalid."}
      placement="top"
    >
      <div>
        <Button
          disabled={!isDataValid}
          color="primary"
          variant="contained"
          size="large"
          sx={{
            width: 150,
          }}
          onClick={makeRequest}
        >
          Find Route
        </Button>
      </div>
    </Tooltip>
  );
};

function fixDestinationList(addressDestinationList: Address[]): Address[] {
  const fixed = addressDestinationList.filter(isAddressValid);

  return fixed;
}
