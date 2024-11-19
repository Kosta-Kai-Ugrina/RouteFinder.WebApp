import React, { FC } from "react";
import { useAppContext } from "../../../../context/AppContext";
import { SearchBox } from "../../SearchBox/SearchBox";
import { ReactComponent as Icon } from "../../../../assets/iconDeliveryAddress.svg";
import { toAddress } from "../../../../utils/searchBoxUtils";
import { Stack } from "@mui/material";
import styles from "./AddressList.module.scss";
import { IconSearchBox } from "../../IconSearchBox/IconSearchBox";

export const AddressList: FC = () => {
  const { addressDestinationList, updateDestinationAddressAt, optimizedRoute } =
    useAppContext();

  return (
    <Stack spacing={1}>
      {addressDestinationList.map((addr, i) => {
        const assignedOrderIndex = optimizedRoute?.findIndex(
          (curr) =>
            curr.latitude === addr.latitude && curr.longitude === addr.longitude
        );

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
              numberDisplayed={
                assignedOrderIndex !== undefined
                  ? (assignedOrderIndex + 1).toString()
                  : undefined
              }
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
