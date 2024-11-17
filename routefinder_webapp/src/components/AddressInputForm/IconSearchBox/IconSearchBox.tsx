import React, { FC } from "react";
import { ReactComponent as IconDeliveryAddress } from "../../../assets/iconDeliveryAddress.svg";
import { ReactComponent as IconWarehouse } from "../../../assets/iconWarehouse.svg";
import { toAddress } from "../../../utils/searchBoxUtils";
import { useAddressContext } from "../../../context/AddressContext";
import { Stack } from "@mui/material";
import styles from "./IconSearchBox.module.scss";
import { SearchBox } from "../SearchBox/SearchBox";

interface Props {
  icon: "warehouse" | "deliveryAddress";
  iconSize?: number;
  label?: string;
  value: string;
  onPlaceSelected?: (placeSelected: google.maps.places.PlaceResult) => void;
}

export const IconSearchBox: FC<Props> = ({
  icon,
  iconSize = 40,
  value,
  label,
  onPlaceSelected,
}) => {
  const Icon = icon === "warehouse" ? IconWarehouse : IconDeliveryAddress;

  return (
    <Stack spacing={2} className={styles.container} direction="row">
      <Icon width={iconSize} height={iconSize} />
      <SearchBox
        value={value}
        label={label}
        onPlaceSelected={onPlaceSelected}
      />
    </Stack>
  );
};
