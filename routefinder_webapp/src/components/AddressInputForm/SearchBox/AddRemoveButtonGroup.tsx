import { Button, ButtonGroup, Fab, Stack, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { FC } from "react";
import { useAddressContext } from "../../../context/AddressContext";
import { Address } from "../../../types";

export const AddRemoveButtonGroup: FC = () => {
  const { addressDestinationList, setAddresses } = useAddressContext();
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

  return (
    <ButtonGroup
      sx={{ height: "100%" }}
      orientation="vertical"
      size="small"
      variant="contained"
    >
      <Tooltip placement="top-start" title="Add delivery address">
        <Button key="btrAdd" onClick={addAddress}>
          <AddIcon />
        </Button>
      </Tooltip>

      <Tooltip placement="bottom-start" title="Remove delivery address">
        <div>
          <Button
            disabled={isMinimumAmountOfAddresses}
            key="btnRemove"
            onClick={removeAddress}
          >
            <RemoveIcon />
          </Button>
        </div>
      </Tooltip>
    </ButtonGroup>
  );

  return (
    <Stack spacing={1}>
      <ButtonGroup variant="contained">
        <Button>
          <AddIcon />
        </Button>
      </ButtonGroup>
      <Tooltip placement="right" title="Add delivery address">
        <Fab color="primary" size="small" onClick={addAddress}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip
        disableHoverListener={addressDestinationList.length <= 1}
        placement="right"
        title="Remove delivery address"
      >
        <div>
          <Fab
            disabled={addressDestinationList.length <= 1}
            color="primary"
            size="small"
            onClick={removeAddress}
          >
            <RemoveIcon />
          </Fab>
        </div>
      </Tooltip>
    </Stack>
  );
};
