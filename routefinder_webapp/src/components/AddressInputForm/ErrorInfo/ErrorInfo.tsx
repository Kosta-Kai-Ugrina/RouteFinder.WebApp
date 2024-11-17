import React, { FC } from "react";
import { useAddressContext } from "../../../context/AddressContext";
import { Paper, Typography } from "@mui/material";

import styles from "./ErrorInfo.module.scss";

export const ErrorInfo: FC = () => {
  const { error } = useAddressContext();

  return (
    <Paper className={styles.container} elevation={2}>
      <Typography
        color="white"
        component="p"
        fontSize={(error?.length ?? 0) > 30 ? 12 : 16}
      >
        {error ?? ""}
      </Typography>
    </Paper>
  );
};
