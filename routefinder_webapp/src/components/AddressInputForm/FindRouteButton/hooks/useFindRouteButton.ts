import { AxiosError } from "axios";
import { findFastestRoute } from "../../../../api/routeFinderApi";
import { useAddressContext } from "../../../../context/AddressContext";
import {
  isAddressValid,
  validateRequest,
} from "../../../../utils/routeRequestValidation";
import { useEffect, useState } from "react";
import { Address } from "../../../../types";

export const useFindRouteButton = () => {
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

  return { isDataValid, makeRequest };
};

function fixDestinationList(addressDestinationList: Address[]): Address[] {
  const fixed = addressDestinationList.filter(isAddressValid);

  return fixed;
}
