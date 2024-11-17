import { usePlacesWidget } from "react-google-autocomplete";
import React, { FC, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import styles from "./SearchBox.module.scss";
import { useSearchBox } from "./hooks/useSearchBox";

export interface SearchBoxProps {
  label?: string;
  value: string;
  onPlaceSelected?: (placeSelected: google.maps.places.PlaceResult) => void;
}

export const SearchBox: FC<SearchBoxProps> = ({
  label,
  value,
  onPlaceSelected,
}) => {
  const { placeWidgetRef, setTextValue, textValue } = useSearchBox({
    value,
    onPlaceSelected,
  });

  return (
    <TextField
      className={styles.textfield}
      // label={label}
      size="small"
      color="primary"
      variant="outlined"
      inputRef={placeWidgetRef}
      value={textValue}
      onChange={(e) => setTextValue(e.target.value)}
    />
  );
};
