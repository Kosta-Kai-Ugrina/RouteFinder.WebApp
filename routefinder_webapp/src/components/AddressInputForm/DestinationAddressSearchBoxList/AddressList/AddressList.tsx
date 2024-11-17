import React, { FC } from "react";
import { useAddressContext } from "../../../../context/AddressContext";
import { SearchBox } from "../../SearchBox/SearchBox";
import { ReactComponent as Icon } from "../../../../assets/iconDeliveryAddress.svg";
import { toAddress } from "../../../../utils/searchBoxUtils";
import { Stack } from "@mui/material";
import styles from "./AddressList.module.scss";
import { IconSearchBox } from "../../IconSearchBox/IconSearchBox";

export const AddressList: FC = () => {
  const { addressDestinationList, updateDestinationAddressAt } =
    useAddressContext();

  return (
    <Stack spacing={1}>
      {addressDestinationList.map((_, i) => {
        return (
          <Stack
            key={`containerAddressDestinationSearchBox${i}`}
            spacing={2}
            className={styles.container}
            direction="row"
          >
            <IconSearchBox
              icon="deliveryAddress"
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
      })}
    </Stack>
  );
};
