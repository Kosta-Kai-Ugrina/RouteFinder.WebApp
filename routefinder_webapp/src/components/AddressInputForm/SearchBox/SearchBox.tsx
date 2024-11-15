import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import React, { FC, useEffect, useState } from "react";
import { TextField } from "@mui/material";

interface Props {
  value: string;
  onPlaceSelected?: (placeSelected: google.maps.places.PlaceResult) => void;
}

export const SearchBox: FC<Props> = ({ value, onPlaceSelected }) => {
  const [textValue, setTextValue] = useState(value);
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const { ref } = usePlacesWidget({
    apiKey: apiKey,
    onPlaceSelected: (place) => {
      if (
        place === undefined ||
        place.formatted_address === undefined ||
        onPlaceSelected === undefined
      )
        return;

      onPlaceSelected(place);
    },
    options: {
      types: ["cafe", "zoo", "street_address"],
      fields: ["formatted_address", "geometry.location"],
    },
  });
  const updateTextOnPlaceSelect = () => setTextValue(value);
  useEffect(updateTextOnPlaceSelect, [value]);

  return (
    <TextField
      fullWidth
      color="secondary"
      variant="outlined"
      inputRef={ref}
      value={textValue}
      onChange={(e) => setTextValue(e.target.value)}
    />
  );
};
