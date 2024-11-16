import React, { FC } from "react";
import { useAddressContext } from "../../../context/AddressContext";
import { Paper, Typography } from "@mui/material";

export const ErrorInfo: FC = () => {
  const { error } = useAddressContext();

  return (
    <Paper
      style={{
        padding: "10px",
        alignItems: "center",
        display: "flex",
        width: "100%",
        backgroundColor: "#f116",
      }}
      elevation={2}
    >
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
