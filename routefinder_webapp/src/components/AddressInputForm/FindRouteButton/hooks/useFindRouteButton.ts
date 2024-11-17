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
    isFetching,
    setIsFetching,
    error,
    setError,
    addressStart,
    addressDestinationList,
    setRouteDataResponse,
  } = useAddressContext();
  const makeRequest = () => {
    setIsFetching(true);
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
      setIsFetching(false);
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
        console.log("enter result.then of FindROuteButton");

        setIsFetching(false);
        if (routeData === null) {
          setRouteDataResponse(null);
          setError(
            "Couldn't find the requested route. Try using other destinations. Ideally connected by land."
          );
          return;
        }
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

  return { isDataValid, makeRequest, isFetching };
};

function fixDestinationList(addressDestinationList: Address[]): Address[] {
  const fixed = addressDestinationList.filter(isAddressValid);

  return fixed;
}
