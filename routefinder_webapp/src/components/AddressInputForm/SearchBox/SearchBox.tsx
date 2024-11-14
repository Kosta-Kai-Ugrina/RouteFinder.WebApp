import Autocomplete from "react-google-autocomplete";
import React, { FC } from "react";

interface Props {
  onPlaceSelected?: (placeSelected: google.maps.places.PlaceResult) => void;
}

export const SearchBox: FC<Props> = (props) => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  return <Autocomplete style={{ width: 200 }} apiKey={apiKey} {...props} />;
};
