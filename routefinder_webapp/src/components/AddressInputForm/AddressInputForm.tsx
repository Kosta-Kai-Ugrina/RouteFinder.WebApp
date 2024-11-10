import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import React, { FC } from "react";

type Props = {};

export const AddressInputForm: FC<Props> = (props: Props) => {
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
      <Button onClick={() => console.log("oh hai")}>Find route</Button>
    </Stack>
  );
};
