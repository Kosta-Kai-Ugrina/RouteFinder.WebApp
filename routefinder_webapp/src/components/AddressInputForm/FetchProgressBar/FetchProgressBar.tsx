import { LinearProgress } from "@mui/material";
import React, { FC } from "react";
import { useAppContext } from "../../../context/AppContext";

export const FetchProgressBar: FC = () => {
  const { isFetching } = useAppContext();
  return <LinearProgress sx={{ display: isFetching ? "block" : "none" }} />;
};
