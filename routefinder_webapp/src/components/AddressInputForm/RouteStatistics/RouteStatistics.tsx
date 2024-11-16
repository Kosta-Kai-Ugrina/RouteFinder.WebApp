import { Divider, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { useAddressContext } from "../../../context/AddressContext";

export const RouteStatistics: FC = () => {
  const { duration, distanceMeters } = useAddressContext();
  const color = "white";
  const size = "h6";
  const durationFormatted = formatTime(duration);
  const distanceFormatted = formatDistance(distanceMeters);

  return distanceMeters === null || duration === null ? (
    <></>
  ) : (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography color={color} component="p" variant={size}>
        Distance: {distanceFormatted} km
      </Typography>
      <Divider sx={{ backgroundColor: color }} orientation="vertical" />
      <Typography color={color} component="p" variant={size}>
        Duration: {durationFormatted}
      </Typography>
    </Stack>
  );
};

function formatDistance(distance: number | null): number {
  if (distance === null) return -1;

  const distanceKilometers = distance / 1000;
  const distanceRounded = Math.round(distanceKilometers * 100) / 100;

  return distanceRounded;
}

function formatTime(time: number | null): string {
  if (time === null) return "duration is null";

  const hoursRaw = Math.floor(time / 3600);
  const minutesRaw = Math.floor((time % 3600) / 60);
  const secondsRaw = Math.floor(time % 60);

  const hours = hoursRaw < 10 ? "0" + hoursRaw : hoursRaw;
  const minutes = minutesRaw < 10 ? "0" + minutesRaw : minutesRaw;
  const seconds = secondsRaw < 10 ? "0" + secondsRaw : secondsRaw;

  return `${hours}:${minutes}:${seconds}`;
}
