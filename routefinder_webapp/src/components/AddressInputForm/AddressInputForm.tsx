import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import React, { FC, useEffect } from "react";
import { useAddressContext } from "../../context/AddressContext";
import {
  findFastestRoute,
  testConnection,
  testOptimizeWrongRoute1,
  testOptimizeWrongRoute2,
} from "../../api/routeFinderApi";
import { SearchBox } from "./SearchBox/SearchBox";

type Props = {};

export const AddressInputForm: FC<Props> = (props: Props) => {
  const { addressStart, addressDestinationList, setAddresses } =
    useAddressContext();

  useEffect(() => {
    console.log("ADDRESS START CHANGE REGISTERED");
    console.log(addressStart);
  }, [addressStart]);

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
      <SearchBox
        onPlaceSelected={(place) => {
          console.log(place);
          setAddresses(
            {
              name: place.formatted_address!,
              latitude: place.geometry?.location?.lat(),
              longitude: place.geometry?.location?.lng(),
            },
            []
          );
        }}
      />
      {/* <Autocomplete
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
      /> */}
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
