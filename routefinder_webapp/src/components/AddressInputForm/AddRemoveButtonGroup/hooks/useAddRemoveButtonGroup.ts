import { useAppContext } from "../../../../context/AddressContext";
import { Address } from "../../../../types";

export const useAddRemoveButtonGroup = () => {
  const { addressDestinationList, setAddresses } = useAppContext();
  const isMinimumAmountOfAddresses = addressDestinationList.length <= 1;
  const addAddress = () => {
    const newAddress: Address = {};
    addressDestinationList.push(newAddress);
    setAddresses({ addressDestinationList: [...addressDestinationList] });
  };
  const removeAddress = () => {
    addressDestinationList.pop();
    setAddresses({ addressDestinationList: [...addressDestinationList] });
  };

  return { addAddress, removeAddress, isMinimumAmountOfAddresses };
};
