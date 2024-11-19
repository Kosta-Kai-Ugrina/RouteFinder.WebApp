import { LinearProgress } from "@mui/material";
import React, { FC } from "react";
import { useAppContext } from "../../../context/AddressContext";

export const FetchProgressBar: FC = () => {
  const { isFetching } = useAppContext();
  return <LinearProgress sx={{ display: isFetching ? "block" : "none" }} />;
};
