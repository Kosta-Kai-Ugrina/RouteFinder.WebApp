import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import React, { FC } from "react";
import { useAddressContext } from "../../context/AddressContext";
import {
  findFastestRoute,
  testConnection,
  testOptimizeWrongRoute1,
  testOptimizeWrongRoute2,
} from "../../api/routeFinderApi";

type Props = {};

export const AddressInputForm: FC<Props> = (props: Props) => {
  const { addressStart, addressDestinationList, setAddresses } =
    useAddressContext();

  console.log("address input form", { ...addressStart });
  console.log("address input form", addressDestinationList);

  const options = [
    "dog",
    "child",
    "shoe",
    "abakus",
    "stadium",
    "adam",
    "plant",
    "coca cola",
    "kokedama",
    "gaffel",
    "hygge",
  ];

  return (
    <Stack spacing={2}>
      <Autocomplete
        id="PointA"
        freeSolo
        options={options.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Point A" />}
      />
      <Autocomplete
        id="PointB"
        freeSolo
        options={options.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Point B" />}
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Find route</Button>
        <Button
          variant="contained"
          onClick={() => {
            testConnection().then((response) => {
              console.log(response);
            });
          }}
        >
          Test Connection
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            testOptimizeWrongRoute1().then((response) => {
              console.log(response);
            });
          }}
        >
          Test 1
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            testOptimizeWrongRoute2().then((response) => {
              console.log(response);
            });
          }}
        >
          Test 2
        </Button>
      </Stack>
    </Stack>
  );
};
