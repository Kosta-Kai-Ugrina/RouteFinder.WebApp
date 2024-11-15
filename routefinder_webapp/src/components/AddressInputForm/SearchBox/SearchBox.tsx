import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import React, { FC } from "react";
import { TextField } from "@mui/material";

interface Props {
  onPlaceSelected?: (placeSelected: google.maps.places.PlaceResult) => void;
}

export const SearchBox: FC<Props> = (props) => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const { ref } = usePlacesWidget({
    apiKey: apiKey,
    onPlaceSelected: props.onPlaceSelected,
    inputAutocompleteValue: "country",
    options: {
      componentRestrictions: { country: "dk" },
    },
  });

  return (
    <TextField fullWidth color="secondary" variant="outlined" inputRef={ref} />
  );

  return (
    <Autocomplete
      style={{ width: 200, height: 30 }}
      apiKey={apiKey}
      {...props}
    />
  );
};
