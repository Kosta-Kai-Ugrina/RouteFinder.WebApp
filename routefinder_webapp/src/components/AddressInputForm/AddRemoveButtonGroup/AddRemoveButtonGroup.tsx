import { Button, ButtonGroup, Fab, Stack, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { FC } from "react";
import { useAppContext } from "../../../context/AddressContext";
import { Address } from "../../../types";
import styles from "./AddRemoveButtonGroup.module.scss";
import { useAddRemoveButtonGroup } from "./hooks/useAddRemoveButtonGroup";

export const AddRemoveButtonGroup: FC = () => {
  const { addAddress, removeAddress, isMinimumAmountOfAddresses } =
    useAddRemoveButtonGroup();

  return (
    <ButtonGroup
      className={styles.container}
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
};
