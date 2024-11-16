import {
  Address,
  RequestValidationResult,
  validationFail,
  validationSuccess,
} from "../types";

export function validateRequest(
  addressStart: Address,
  addressDestinationList: Address[]
): RequestValidationResult {
  if (!isAddressValid(addressStart)) {
    return validationFail(
      "Warehouse address is missing either a latitude, a longitude, or both."
    );
  }

  if (addressDestinationList.length <= 0) {
    return validationFail("There are no destinations specified.");
  }

  const destinationListValidations = addressDestinationList.map(isAddressValid);

  if (destinationListValidations.filter((x) => !x.isValid).length > 1) {
    validationFail("Multiple destination addresses failed validation.");
  }

  const validationRes = destinationListValidations.find((x) => !x.isValid);
  if (validationRes !== undefined) {
    return validationRes;
  }

  return validationSuccess();
}

export function isAddressValid(address: Address): RequestValidationResult {
  if (address.latitude === undefined || address.longitude === undefined) {
    return validationFail(
      "One of the addresses has missing either a latitude, a longitude missing, or both."
    );
  }

  return validationSuccess();
}
