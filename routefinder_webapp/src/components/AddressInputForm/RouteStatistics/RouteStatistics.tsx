import { Divider, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { useAppContext } from "../../../context/AppContext";
import { useRouteStatistics } from "./hooks/useRouteStatistics";

const COLOR = "white";
const SIZE = "h6";

export const RouteStatistics: FC = () => {
  const { duration, distance } = useRouteStatistics();
  return distance === null || duration === null ? (
    <></>
  ) : (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography color={COLOR} component="p" variant={SIZE}>
        Distance: {distance} km
      </Typography>
      <Divider sx={{ backgroundColor: COLOR }} orientation="vertical" />
      <Typography color={COLOR} component="p" variant={SIZE}>
        Duration: {duration}
      </Typography>
    </Stack>
  );
};
