import { LinearProgress } from "@mui/material";
import React, { FC } from "react";
import { useAddressContext } from "../../../context/AddressContext";

export const FetchProgressBar: FC = () => {
  const { isFetching } = useAddressContext();
  return <LinearProgress sx={{ display: isFetching ? "block" : "none" }} />;
};
