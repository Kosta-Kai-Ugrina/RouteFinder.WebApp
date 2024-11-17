import React, { ReactNode, useEffect, useState } from "react";
import { SearchBox } from "../SearchBox/SearchBox";
import { toAddress } from "../../../utils/searchBoxUtils";
import { useAddressContext } from "../../../context/AddressContext";
import { Address } from "../../../types";
import { Stack } from "@mui/material";
import { AddRemoveButtonGroup } from "../AddRemoveButtonGroup/AddRemoveButtonGroup";
import { ReactComponent as Icon } from "../../../assets/iconDeliveryAddress.svg";
import { AddressList } from "./AddressList/AddressList";

export const DestinationAddressSearchBoxList = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <AddressList />
      <AddRemoveButtonGroup />
    </Stack>
  );
};
