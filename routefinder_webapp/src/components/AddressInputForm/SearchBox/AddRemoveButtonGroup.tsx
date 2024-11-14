import { Button, ButtonGroup, Fab, Stack, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { FC } from "react";
import { useAddressContext } from "../../../context/AddressContext";
import { Address } from "../../../types";

export const AddRemoveButtonGroup: FC = () => {
  const { addressDestinationList, setAddresses } = useAddressContext();
  const addAddress = () => {
    const newAddress: Address = {};
    addressDestinationList.push(newAddress);
    setAddresses({ addressDestinationList: [...addressDestinationList] });
  };
  const removeAddress = () => {
    addressDestinationList.pop();
    setAddresses({ addressDestinationList: [...addressDestinationList] });
  };

  return (
    <Stack spacing={1}>
      <Tooltip placement="right" title="Add delivery address">
        <Fab color="primary" size="small" onClick={addAddress}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip placement="right" title="Remove delivery address">
        <Fab
          disabled={addressDestinationList.length <= 1}
          color="primary"
          size="small"
          onClick={removeAddress}
        >
          <RemoveIcon />
        </Fab>
      </Tooltip>
    </Stack>
  );
};
