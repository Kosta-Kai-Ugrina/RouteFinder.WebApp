import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

type Props = {};

export const Map: FC<Props> = (props: Props) => {
  return (
    <Box
      sx={{
        width: 400,
        height: 400,
        borderRadius: 10,
        color: "white",
        bgcolor: "#0000FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">Map</Typography>
    </Box>
  );
};
