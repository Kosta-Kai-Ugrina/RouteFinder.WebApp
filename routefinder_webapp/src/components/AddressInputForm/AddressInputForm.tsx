import {
  Autocomplete,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { useAddressContext } from "../../context/AddressContext";
import {
  findFastestRoute,
  testConnection,
  testOptimizeWrongRoute1,
  testOptimizeWrongRoute2,
} from "../../api/routeFinderApi";
import { SearchBox } from "./SearchBox/SearchBox";
import { TestButtons } from "./TestButtons/TestButtons";
import { StartAddressSearchBox } from "./SearchBox/StartAddressSearchBox";
import { DestinationAddressSearchBoxList } from "./SearchBox/DestinationAddressSearchBoxList";
import { FindRouteButton } from "./FindRouteButton/FindRouteButton";

type Props = {};

export const AddressInputForm: FC<Props> = (props: Props) => {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "absolute",
        zIndex: "1000",
        backgroundColor: "#0005",
        padding: 2,
        margin: 2,
      }}
    >
      <Stack spacing={5}>
        <StartAddressSearchBox />
        <DestinationAddressSearchBoxList />
        <FindRouteButton />
        {/* <TestButtons /> */}
      </Stack>
    </Paper>
  );
};
